const { TourSchedule, UserTourSchedule, User } = require("../models");
const axios = require("axios");
const { Client } = require("@googlemaps/google-maps-services-js");
const { Sequelize } = require("sequelize");
const { generateMail, transporter } = require("../service/nodemailer");
const invitationMailGenerator = require("../helper/invitationMailGenerator");

const gClient = new Client({});

class ControllerTourSchedule {
  static async tourSchedulePublic(req, res, next) {
    try {
      const { page, perPage = 10, title = "" } = req.query;
      let offset, limit;
      if (page > 0) {
        offset = (page - 1) * perPage;
        limit = perPage;
      }
      const params = {
        title: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("title")),
          "LIKE",
          "%" + title.toLowerCase() + "%"
        ),
      };
      Object.keys(params).forEach(
        (item) => params[item] === undefined && delete params[item]
      );
      const result = await TourSchedule.findAll({
        include: Company,
        limit,
        offset,
        where: params,
      });
      const total = await TourSchedule.count({
        where: params,
      });
      res
        .status(200)
        .json({ result, total, perPage: Number(perPage), page: Number(page) });
    } catch (error) {
      next(error);
    }
  }

  static async tourScheduleById(req, res, next) {
    const TourScheduleId = Number(req.params.id);
    const key = process.env.TOKEN_GOOGLE_PLACE;

    try {
      const result = await TourSchedule.findByPk(TourScheduleId, {
        include: User,
      });

      const placeResponse = await gClient.textSearch({
        params: {
          key,
          query: result.placeName,
          language: "id",
          region: "id",
        },
      });

      if (placeResponse.data.results && placeResponse.data.results[0]) {
        const place = placeResponse.data.results[0];
        res.status(200).json({
          result: {
            ...result,
            place: {
              placeId: place.place_id,
              name: place.name,
              location: place.geometry.location,
              address: place.formatted_address,
              rating: place.rating,
              photos: place.photos,
              ratingTotal: place.user_ratings_total,
            },
          },
        });
      } else {
        throw placeResponse;
      }
    } catch (error) {
      console.log({ error });
      next(error);
    }
  }

  static async tourSchedulePrivate(req, res, next) {
    const UserId = Number(req.users.id);

    try {
      const result = await User.findAll({
        include: TourSchedule,
        where: {
          id: UserId,
        },
      });

      res.status(200).json(result.TourSchedules);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async addTourSchedule(req, res, next) {
    const UserId = Number(req.users.id);
    const {
      planDate,
      endDate,
      memberSlot,
      placeName,
      isPublic,
      description,
      price,
      name,
      invitedUsers,
    } = req.body;
    const key = process.env.TOKEN_GOOGLE_PLACE;

    try {
      const placeResponse = await gClient.textSearch({
        params: {
          key,
          query: placeName,
          region: "id",
          language: "id",
        },
      });

      if (placeResponse.data.results && placeResponse.data.results[0]) {
        const place = placeResponse.data.results[0];
        let photo;

        if (place.photos && place.photos[0]) {
          const photoResponse = await gClient.placePhoto({
            params: {
              key,
              photoreference: place.photos[0].photo_reference,
              maxwidth: 480,
            },
          });
          photo = photoResponse.request._redirectable._currentUrl;
        }

        const dataTourSchedule = await TourSchedule.create({
          planDate,
          endDate,
          memberSlot,
          placeId: place.place_id,
          placeName: place.name,
          placeAddress: place.formatted_address,
          placeRating: place.rating,
          placePhoto: photo,
          isPublic,
          description,
          price,
          name,
          status: "plan",
        });

        await UserTourSchedule.create({
          UserId,
          TourScheduleId: dataTourSchedule.id,
          role: "creator",
          status: "apply",
        });

        if (invitedUsers.length > 0) {
          for (let i = 0; i < invitedUsers.length; i++) {
            const userDetail = await User.findByPk(invitedUsers[i]);
            if (userDetail) {
              await UserTourSchedule.create({
                UserId: invitedUsers[i],
                TourScheduleId: dataTourSchedule.id,
                role: "member",
                status: "pending",
              });
              const emailContent = invitationMailGenerator(
                userDetail,
                dataTourSchedule
              );
              const mail = generateMail(
                emailContent,
                undefined,
                `Tour Invitation`,
                userDetail.email
              );

              transporter.sendMail(mail, (error, info) => {
                if (error) {
                  throw error;
                } else {
                  console.log(
                    `email with ID ${info.messageId} sended to ` +
                      userDetail.email
                  );
                }
              });
            } else {
              throw userDetail;
            }
          }
        }

        res.status(201).json(dataTourSchedule);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async tourScheduleAction(req, res, next) {
    const id = Number(req.params.id);
    const { action } = req.params;
    const {
      planDate,
      endDate,
      memberSlot,
      placeId,
      isPublic,
      description,
      price,
    } = req.body;
    let result;

    try {
      if (action === "invite") {
        const { invitedUsers } = req.body;
        if (invitedUsers.length > 0) {
          for (let i = 0; i < invitedUsers.length; i++) {
            await UserTourSchedule.create({
              UserId: invitedUsers[i].id,
              TourScheduleId: id,
              role: "member",
              status: "pending",
            });
          }
        }
      } else if (action === "accept") {
        result = await TourSchedule.update(
          {
            planDate,
            endDate,
            memberSlot,
            placeId,
            isPublic,
            description,
            price,
            status: "accept",
          },
          { where: { id }, returning: true }
        );
      } else if (action === "decline") {
        result = await TourSchedule.update(
          {
            planDate,
            endDate,
            memberSlot,
            placeId,
            isPublic,
            description,
            price,
            status: "decline",
          },
          { where: { id }, returning: true }
        );
      } else if (action === "cancel") {
        result = await TourSchedule.update(
          {
            planDate,
            endDate,
            memberSlot,
            placeId,
            isPublic,
            description,
            price,
            status: "cancel",
          },
          { where: { id }, returning: true }
        );
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerTourSchedule;

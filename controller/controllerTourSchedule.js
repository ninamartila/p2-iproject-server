const { TourSchedule, UserTourSchedule, User } = require('../models');
const axios = require('axios');
const base64encode = require('../helper/base64encode');

class ControllerTourSchedule {
    static async tourSchedulePublic(req, res, next) {
        try {
            const result = await TourSchedule.findAll()

            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async tourScheduleById(req, res, next) {
        const TourScheduleId = Number(req.params.id)
        const key = process.env.TOKEN_GOOGLE_PLACE

        try {
            const result = await TourSchedule.findByPk(TourScheduleId, { include: User })
            // const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${result.placeId}&language=id&region=id&key=${key}`)
            // const photos = []
            // const maxIndex = response.data.result.photos.length > 3 ? 3 : response.data.result.photos.length
            // console.log(response.data.result.photos[0].getUrl());
            // for (let index = 0; index < maxIndex; index++) {
            //     console.log(response.data)
            //     const element = response.data.result.photos[index];
            //     const photoResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${element.photo_reference}&maxwidth=256&key=${key}`)
            //     const base64 = base64encode(photoResponse.data)

            //     photos.push(base64)
            // }
            res.status(200).json(result)
        } catch (error) {
            console.log({ error })
            next(error)
        }
    }

    static async tourSchedulePrivate(req, res, next) {
        const UserId = Number(req.users.id)

        try {
            const result = await User.findOne({
                include: TourSchedule,
                where: {
                    id: UserId
                }
            })

            res.status(200).json(result.TourSchedules)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async addTourSchedule(req, res, next) {
        const UserId = Number(req.users.id)
        const { planDate, endDate, memberSlot, placeId, isPublic, description, price, placeName, placeAddress, placeRating, name, invitedUsers } = req.body

        try {
            const dataTourSchedule = await TourSchedule.create({ planDate, endDate, memberSlot, placeId, isPublic, description, price, placeName, placeAddress, placeRating, name, status: "plan" })
            await UserTourSchedule.create({ UserId, TourScheduleId: dataTourSchedule.id, role: 'creator', status: 'apply' })

            if (invitedUsers.length > 0) {
                for (let i = 0; i < invitedUsers.length; i++) {
                    await UserTourSchedule.create({ UserId: invitedUsers[i].id, TourScheduleId: dataTourSchedule.id, role: 'member', status: 'pending' })
                }
            }

            res.status(201).json(dataTourSchedule)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async tourScheduleAction(req, res, next) {
        const id = Number(req.params.id)
        const { action } = req.params
        const { planDate, endDate, memberSlot, placeId, isPublic, description, price } = req.body
        let result

        try {
            if (action === 'invite') {
                result = await TourSchedule.update(
                    { planDate, endDate, memberSlot, placeId, isPublic, description, price, status: 'invite' },
                    { where: { id }, returning: true }
                )
            } else if (action === 'accept') {
                result = await TourSchedule.update(
                    { planDate, endDate, memberSlot, placeId, isPublic, description, price, status: 'accept' },
                    { where: { id }, returning: true }
                )
            } else if (action === 'decline') {
                result = await TourSchedule.update(
                    { planDate, endDate, memberSlot, placeId, isPublic, description, price, status: 'decline' },
                    { where: { id }, returning: true }
                )
            } else if (action === 'cencle') {
                result = await TourSchedule.update(
                    { planDate, endDate, memberSlot, placeId, isPublic, description, price, status: 'cencle' },
                    { where: { id }, returning: true }
                )
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerTourSchedule
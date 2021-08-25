const { Client } = require("@googlemaps/google-maps-services-js");

const gClient = new Client({});

class ControllerPlace {
  static async place(req, res, next) {
    const { query } = req.query;
    const key = process.env.TOKEN_GOOGLE_PLACE;

    try {
      const response = await gClient.textSearch({
        params: {
          key,
          query,
          region: "id",
          language: "id",
        },
      });

      const result = response.data.results.map((item) => ({
        placeId: item.place_id,
        name: item.name,
        location: item.geometry.location,
        address: item.formatted_address,
        rating: item.rating,
        photos: item.photos,
        ratingTotal: item.user_ratings_total,
      }));

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerPlace;

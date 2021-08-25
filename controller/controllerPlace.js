const axios = require('axios');
const base64encode = require('../helper/base64encode');
class ControllerPlace {
    static async place(req, res, next) {
        const { query } = req.query
        const key = process.env.TOKEN_GOOGLE_PLACE

        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${key}`)

            res.status(200).json(response.data.results)
        } catch (error) {
            next(error)
        }
    }

    static async placeDetail(req, res, next) {
        const { id } = req.params
        const key = process.env.TOKEN_GOOGLE_PLACE

        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&language=id&region=id&key=${key}`)
            const photos = []
            const maxIndex = response.data.result.photos.length > 3 ? 3 : response.data.result.photos.length
            console.log(response.data.result.photos.getUrl());
            for (let index = 0; index < maxIndex; index++) {
                const element = response.data.result.photos[index];
                const photoResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${element.photo_reference}&maxwidth=256&key=${key}`)
                const base64 = base64encode(photoResponse.data)

                photos.push(base64)
            }

            res.status(200).json({ result: response.data.result, photos })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerPlace
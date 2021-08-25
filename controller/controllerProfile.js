const { Profile } = require('../models');

class ControllerProfile {
    static async profile(req, res, next) {
        const id = Number(req.users.id)

        try {
            const result = await Profile.findByPk(id)

            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async editProfile(req, res, next) {
        const id = Number(req.users.id)
        const { fullName, phoneNumber, address, imageProfile, gender } = req.body

        try {
            const findProfile = await Profile.findByPk(id)

            if (findProfile) {
                const result = await Profile.update(
                    { fullName, phoneNumber, address, imageProfile, gender },
                    { where: { id }, returning: true }
                )

                res.status(200).json(result[1][0])
            } else {
                throw ({ name: 'NotFound', type: 'Profile' })
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerProfile
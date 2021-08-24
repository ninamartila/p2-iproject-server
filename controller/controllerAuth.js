const { checkPassword } = require('../helper/bcrypt');
const { signToken } = require('../helper/jwt');
const { User, Profile } = require('../models');

class ControllerAuth {
    static async register(req, res, next) {
        const { username, email, password } = req.body

        try {
            await Profile.create({ fullName: '', phoneNumber: '', address: '', imageProfile: '', gender: '' })
            const result = await User.create({ username, email, password })
            const data = {
                id: result.id,
                username: result.username,
                email: result.email
            }

            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body

        try {
            const result = await User.findOne({ where: { email } })

            if (result) {
                if (checkPassword(password, result.password)) {
                    const access_token = signToken({ id: result.id, email: result.email })

                    res.status(200).json({ access_token, UserId: result.id })
                } else {
                    throw ({ name: 'Unauthorized' })
                }
            } else {
                throw ({ name: 'Unauthorized' })
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerAuth
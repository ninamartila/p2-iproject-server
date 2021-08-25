const { User } = require('../models');

class ControllerUser {
    static async user(req, res, next) {
        const id = Number(req.users.id)

        try {
            const result = await User.findAll()

            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerUser
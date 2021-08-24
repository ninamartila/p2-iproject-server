const { UserTourSchedule, TourSchedule, User } = require('../models');

class ControllerUserTourSchedule {
    static async addUserTourSchedule(req, res, next) {
        const UserId = Number(req.users.id)
        const TourScheduleId = Number(req.params.id)

        try {
            const result = await UserTourSchedule.create({ UserId, TourScheduleId, role: 'member', status: 'pending' })

            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async userTourSchedule(req, res, next) {
        const TourScheduleId = Number(req.params.id)

        try {
            const result = await UserTourSchedule.findAll({
                include: {
                    model: User,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'password']
                    }
                },
                where: {
                    TourScheduleId
                }
            })

            res.status(200).json(result)
        } catch (error) {
            next(200)
        }
    }

    static async deleteUserTourSchedule(req, res, next) {
        const TourScheduleId = Number(req.params.idTour)
        const UserId = Number(req.params.idUser)

        try {
            await UserTourSchedule.destroy({ where: { TourScheduleId, UserId } })

            res.status(200).json('success deleted User')
        } catch (error) {
            next(error)
        }
    }

    static async userTourScheduleByStatus(req, res, next) {
        const UserId = Number(req.body.id)
        const TourScheduleId = Number(req.params.id)
        const { status } = req.params

        try {
            const result = await UserTourSchedule.put({ UserId, TourScheduleId, role: "member", status })

            res.status(200).json(result)
        } catch (errr) {
            next(error)
        }
    }
}

module.exports = ControllerUserTourSchedule
const { TourSchedule, UserTourSchedule } = require('../models');

class ControllerTourSchedule {
    static async tourSchedule(req, res, next) {
        try {
            const result = await TourSchedule.findAll()

            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async addTourSchedule(req, res, next) {
        const UserId = Number(req.users.id)
        const { planDate, invitedUsers } = req.body

        try {
            const dataTourSchedule = await TourSchedule.create({ planDate, status: "pending" })
            const result = await UserTourSchedule.create({ UserId, TourScheduleId: dataTourSchedule.id, role: 'creator', status: 'apply' })

            for (let i = 0; i < invitedUsers.length; i++) {
                await UserTourSchedule.create({ UserId: invitedUsers[i].id, TourScheduleId: dataTourSchedule.id, role: 'member', status: 'pending' })
            }
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerTourSchedule
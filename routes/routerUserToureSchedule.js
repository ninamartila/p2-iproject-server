const ControllerUserTourSchedule = require('../controller/controllerUserTourSchedule');
const authorization = require('../middleware/authorization');
const routerUserToureSchedule = require('express').Router();

routerUserToureSchedule.post('/', ControllerUserTourSchedule.addUserTourSchedule)
routerUserToureSchedule.get('/:id', authorization, ControllerUserTourSchedule.userTourSchedule)
routerUserToureSchedule.delete('/:idTour/:idUser', authorization, ControllerUserTourSchedule.deleteUserTourSchedule)
routerUserToureSchedule.post('/:id/:staus', ControllerUserTourSchedule.userTourScheduleByStatus)

module.exports = routerUserToureSchedule
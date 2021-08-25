const ControllerTourSchedule = require('../controller/controllerTourSchedule');
const authentication = require('../middleware/authentication');
const routerTourSchedule = require('express').Router();

routerTourSchedule.get('/public', ControllerTourSchedule.tourSchedulePublic)
routerTourSchedule.get('/:id', ControllerTourSchedule.tourScheduleById)
routerTourSchedule.use(authentication)
routerTourSchedule.get('/private', ControllerTourSchedule.tourSchedulePrivate)
routerTourSchedule.post('/', ControllerTourSchedule.addTourSchedule)

module.exports = routerTourSchedule
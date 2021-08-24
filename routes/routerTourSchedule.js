const ControllerTourSchedule = require('../controller/controllerTourSchedule');
const routerTourSchedule = require('express').Router();

routerTourSchedule.get('/', ControllerTourSchedule.tourSchedule)
routerTourSchedule.post('/', ControllerTourSchedule.addTourSchedule)

module.exports = routerTourSchedule
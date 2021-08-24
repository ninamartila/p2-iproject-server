const ControllerPlace = require('../controller/controllerPlace');
const routerPlace = require('express').Router();

routerPlace.get('/', ControllerPlace.place)

module.exports = routerPlace
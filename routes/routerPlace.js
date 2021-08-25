const ControllerPlace = require('../controller/controllerPlace');
const routerPlace = require('express').Router();

routerPlace.get('/', ControllerPlace.place)
routerPlace.get('/:id', ControllerPlace.placeDetail)

module.exports = routerPlace
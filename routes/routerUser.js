const ControllerUser = require('../controller/controllerUser');
const routerUser = require('express').Router();

routerUser.get('/', ControllerUser.user)

module.exports = routerUser
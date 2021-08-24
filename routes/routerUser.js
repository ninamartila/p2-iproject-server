const ControllerUser = require('../controller/controllerUser');
const authorization = require('../middleware/authorization');
const routerUser = require('express').Router();

routerUser.get('/', authorization, ControllerUser.user)

module.exports = routerUser
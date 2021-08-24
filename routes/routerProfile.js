const ControllerProfile = require('../controller/controllerProfile');
const routerProfile = require('express').Router();

routerProfile.get('/', ControllerProfile.profile)
routerProfile.put('/', ControllerProfile.editProfile)

module.exports = routerProfile
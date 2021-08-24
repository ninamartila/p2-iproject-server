const ControllerAuth = require('../controller/controllerAuth');
const routerAuth = require('express').Router();

routerAuth.post('/register', ControllerAuth.register)
routerAuth.post('login', ControllerAuth.login)

module.exports = routerAuth
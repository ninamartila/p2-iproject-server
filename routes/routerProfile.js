const ControllerProfile = require('../controller/controllerProfile');
const routerProfile = require('express').Router();
const multer = require('multer');
const imageError = require('../middleware/imageError');
const imageUpload = require('../middleware/imageUpload');
const upload = multer()

routerProfile.get('/', ControllerProfile.profile)
routerProfile.put('/', upload.single('imageProfile'), imageError, imageUpload, ControllerProfile.editProfile)

module.exports = routerProfile
const authentication = require('../middleware/authentication');
const errorHandle = require('../middleware/errorHandler');
const routerAuth = require('./routerAuth');
const routerPlace = require('./routerPlace');
const routerProfile = require('./routerProfile');
const routerTourSchedule = require('./routerTourSchedule');
const routerUser = require('./routerUser');
const routerUserToureSchedule = require('./routerUserToureSchedule');
const router = require('express').Router();

router.use('/auth', routerAuth)
router.use('/places', routerPlace)
router.use(authentication)
router.use('/profiles', routerProfile)
router.use('/tourSchedules', routerTourSchedule)
router.use('/users', routerUser)
router.use('/UsertourSchedules', routerUserToureSchedule)
router.use(errorHandle)

module.exports = router
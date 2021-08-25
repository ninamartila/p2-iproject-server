const authentication = require('../middleware/authentication');
const errorHandle = require('../middleware/errorHandler');
const routerAuth = require('./routerAuth');
const routerPlace = require('./routerPlace');
const routerProfile = require('./routerProfile');
const routerTourSchedule = require('./routerTourSchedule');
const routerUser = require('./routerUser');
const router = require('express').Router();

router.use('/auth', routerAuth)
router.use('/tourSchedules', routerTourSchedule)
router.use(authentication)
router.use('/places', routerPlace)
router.use('/profiles', routerProfile)
router.use('/userList', routerUser)
router.use(errorHandle)

module.exports = router
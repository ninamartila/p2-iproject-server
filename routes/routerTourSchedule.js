const ControllerTourSchedule = require("../controller/controllerTourSchedule");
const authentication = require("../middleware/authentication");
const routerTourSchedule = require("express").Router();

routerTourSchedule.get("/public", ControllerTourSchedule.tourSchedulePublic);
routerTourSchedule.get("/public/:id", ControllerTourSchedule.tourScheduleById);
routerTourSchedule.use(authentication);
routerTourSchedule.get("/private", ControllerTourSchedule.tourSchedulePrivate);
routerTourSchedule.get("/private/:id", ControllerTourSchedule.tourScheduleById);
routerTourSchedule.post("/", ControllerTourSchedule.addTourSchedule);
routerTourSchedule.put(
  "/action/:id/:action",
  ControllerTourSchedule.tourScheduleAction
);

module.exports = routerTourSchedule;

const { Op } = require("sequelize");
const { User } = require("../models");

class ControllerUser {
  static async user(req, res, next) {
    const id = Number(req.users.id);

    try {
      const result = await User.findAll({
        where: {
          id: {
            [Op.ne]: id,
          },
        },
      });

      res.status(200).json(result);
    } catch (error) {
      console.log({ error });
      next(error);
    }
  }
}

module.exports = ControllerUser;

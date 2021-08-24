'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TourSchedule.belongsToMany(models.User, { through: models.TourScheduleTourSchedule })
      TourSchedule.hasMany(models.UserTourSchedule)
    }
  };
  TourSchedule.init({
    planDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Plan Date is Required" },
        notNull: { msg: "Plan Date is Required" }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Status is Required" },
        notNull: { msg: "Status is Required" }
      }
    }
  }, {
    sequelize,
    modelName: 'TourSchedule',
  });
  return TourSchedule;
};
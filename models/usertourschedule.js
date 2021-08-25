'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTourSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserTourSchedule.belongsTo(models.User, { foreignKey: 'UserId' })
      UserTourSchedule.belongsTo(models.TourSchedule, { foreignKey: 'TourScheduleId' })
    }
  };
  UserTourSchedule.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    UserId: DataTypes.INTEGER,
    TourScheduleId: DataTypes.INTEGER,
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Role is Required" },
        notNull: { msg: "Role is Required" }
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
    modelName: 'UserTourSchedule',
  });
  return UserTourSchedule;
};
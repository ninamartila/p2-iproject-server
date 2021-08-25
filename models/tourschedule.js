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
      TourSchedule.belongsToMany(models.User, { through: models.UserTourSchedule })
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
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: { msg: "End Date is Required" },
        notNull: { msg: "End Date is Required" }
      }
    },
    memberSlot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Member Slot is Required" },
        notNull: { msg: "Member Slot is Required" }
      }
    },
    placeId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Place Id is Required" },
        notNull: { msg: "Place Id is Required" }
      }
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Public is Required" },
        notNull: { msg: "Public is Required" }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Description is Required" },
        notNull: { msg: "Description is Required" }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Price is Required" },
        notNull: { msg: "Price is Required" }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Status is Required" },
        notNull: { msg: "Status is Required" }
      }
    },
    placeName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Place Name is Required" },
        notNull: { msg: "Place Name is Required" }
      }
    },
    placeAddress: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Place Address is Required" },
        notNull: { msg: "Place Address is Required" }
      }
    },
    placeRating: {
      allowNull: false,
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: { msg: "Place Rating is Required" },
        notNull: { msg: "Place Rating is Required" }
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Name is Required" },
        notNull: { msg: "Name is Required" }
      }
    },
  }, {
    sequelize,
    modelName: 'TourSchedule',
  });
  return TourSchedule;
};
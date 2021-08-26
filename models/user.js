'use strict';
const {
  Model
} = require('sequelize');
const { hasPassword } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, { foreignKey: 'id' })
      User.belongsToMany(models.TourSchedule, { through: models.UserTourSchedule })
      User.hasMany(models.UserTourSchedule)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Username is Required" },
        notNull: { msg: "Username is Required" }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email is already exists" },
        notEmpty: { msg: "Email is Required" },
        notNull: { msg: "Email is Required" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Password is Required" },
        notNull: { msg: "Password is Required" }
      }
    },
    ProfileId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance) {
        instance.password = hasPassword(instance.password)
      }
    },
  });
  return User;
};
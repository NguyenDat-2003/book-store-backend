'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Cart)
      User.hasMany(models.Order)
      User.belongsTo(models.Group)
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      phone: DataTypes.STRING,
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      sex: DataTypes.STRING,
      groupId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}

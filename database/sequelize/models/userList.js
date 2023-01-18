'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserList extends Model {
    static associate(models) {
      models.UserList.hasMany(models.RoleList, {})
    }
  }

  UserList.init({
    user: DataTypes.STRING,
    pwd: DataTypes.STRING,
    area: DataTypes.STRING,
    rid: DataTypes.INTEGER,
    tag: {
      type: DataTypes.ENUM,
      values: ['active', 'pending', 'deleted']
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return UserList;
};
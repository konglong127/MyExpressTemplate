'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoleList extends Model {
    static associate(models) {
      // models.Article.hasMany(models.Comment,{})
    }
  }

  RoleList.init({
    role: DataTypes.STRING,
    rights: DataTypes.TEXT 
  }, {
    sequelize,
    modelName: 'Role',
  });

  return RoleList;
};
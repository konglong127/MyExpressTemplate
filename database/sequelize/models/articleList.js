'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ArticleList extends Model {
    static associate(models) {
      // models.Article.hasMany(models.Comment,{})
    }
  }

  ArticleList.init({
    user:DataTypes.STRING,
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    category: DataTypes.STRING,
    state:DataTypes.STRING,
    place:DataTypes.STRING,
    send:DataTypes.STRING,
    cid:DataTypes.INTEGER,
    commentNum:DataTypes.INTEGER,
    visitNum:DataTypes.INTEGER,
    upNum:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });

  return ArticleList;
};
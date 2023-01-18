'use strict';

const Sequelize = require('sequelize');
// const env = process.env.NODE_ENV || 'development';
// const env ='production';
const env ='development';
const config = require('./config.json')[env];
const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


const RoleList=require('./models/roleList');
db.RoleList=RoleList(sequelize, Sequelize.DataTypes);

const UserList=require('./models/userList');
db.UserList=UserList(sequelize, Sequelize.DataTypes);
db.UserList.belongsTo(db.RoleList, { foreignKey:'rid', targetKey: 'id'});

const ArticleList=require('./models/articleList');
db.ArticleList=ArticleList(sequelize,Sequelize.DataTypes);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

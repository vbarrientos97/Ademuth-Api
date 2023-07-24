const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("./../db/models");

const sequelize = new Sequelize(
  config.dbName, //name of the database
  config.dbUser, //username of the database
  config.dbPassword, //password of the database
  {
    host: config.dbHost,
    dialect: "postgresql",
  }
);

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;

require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.Database_Name,
  process.env.Database_User,
  process.env.Database_Password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;

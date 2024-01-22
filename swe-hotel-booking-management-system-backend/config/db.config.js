const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('hotel_booking', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;

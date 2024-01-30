const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db.config");

const adminLogin = sequelize.define("adminLogin", {
  email: {
    type: DataTypes.STRING,
    defaultValue: "admin@gmail.com",
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: "123456789",
  },
});
adminLogin.sync({ alter: false }).then(() => {
  // Check if there are any existing records
  adminLogin.findAndCountAll().then((result) => {
    if (result.count === 0) {
      // If no records exist, create a new record with default values
      adminLogin.create({});
    }
  });
});

module.exports = adminLogin;

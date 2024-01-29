// student.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define("userData", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
    unique: true, // Field must be unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
    validate: {
      len: [6, 100], // Password length must be between 6 and 100 characters
    },
  },
});

User.sync()
  .then(() => {
    console.log("User table created successfully.");
  })
  .catch((error) => {
    console.error("Error syncing User model with the database", error);
  });

module.exports = User;

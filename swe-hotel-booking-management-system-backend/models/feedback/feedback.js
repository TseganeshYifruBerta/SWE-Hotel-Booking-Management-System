// student.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db.config");

const Feedback = sequelize.define("feedbackDatas", {
  message: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
});

Feedback.sync()
  .then(() => {
    console.log("feedback table created successfully.");
  })
  .catch((error) => {
    console.error("Error syncing feedback model with the database", error);
  });

module.exports = Feedback;

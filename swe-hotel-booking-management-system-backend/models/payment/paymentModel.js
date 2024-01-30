// student.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db.config");

const Payment = sequelize.define("paymentDatas", {
  photo: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  transactionId: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
});

Payment.sync()
  .then(() => {
    console.log("Payment table created successfully.");
  })
  .catch((error) => {
    console.error("Error syncing Payment model with the database", error);
  });

module.exports = Payment;

// student.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db.config");

const Payment = sequelize.define("paymentData", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  photo: {
    type: DataTypes.BLOB("long"),
    allowNull: false, // Field cannot be null
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
    unique: true, // Field must be unique
  },
  transactionId: {
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

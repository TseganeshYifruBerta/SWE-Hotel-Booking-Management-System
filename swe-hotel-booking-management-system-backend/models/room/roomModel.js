// student.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db.config");

const Room = sequelize.define("roomDatas", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  photo: {
    type: DataTypes.BLOB("long"),
    allowNull: false, // Field cannot be null
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
  status: {
    type: DataTypes.ENUM("available", "unavailable"),
    allowNull: false,
  },
  availableRooms: {
    type: DataTypes.STRING,
    allowNull: false, // Field cannot be null
  },
});

Room.sync()
  .then(() => {
    console.log("Room table created successfully.");
  })
  .catch((error) => {
    console.error("Error syncing Room model with the database", error);
  });

module.exports = Room;

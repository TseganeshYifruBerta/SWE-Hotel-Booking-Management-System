const { Router } = require("express");

// const {
//   paymentMethod,
// } = require("../../controllers/payment/paymentController");
const {
  addRoomMethod,
} = require("../../controllers/Room/roomController");
const { editRoomMethod } = require("../../controllers/Room/roomController");
const {
  getAllRooms,
  getAllRoomsById,
  deleteRoom,
} = require("../../controllers/Room/roomManagement");

const roomRouter = Router();

// roomRouter.post("/payment", paymentMethod);
roomRouter.post("/addRoom", addRoomMethod); 
roomRouter.put("/editRoom/:id", editRoomMethod); 
roomRouter.get("/getRoomById/:id", getAllRoomsById); 
roomRouter.get("/getAllRooms", getAllRooms); 
roomRouter.delete("/deleteRoom/:id", deleteRoom); 





module.exports = roomRouter;

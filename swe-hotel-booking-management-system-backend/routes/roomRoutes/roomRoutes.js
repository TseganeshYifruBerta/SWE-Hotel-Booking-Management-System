const { Router } = require("express");

const {
  paymentMethod,
} = require("../../controllers/payment/paymentController");
const {
  addRoomMethod,
} = require("../../controllers/Room/roomController");
const { editRoomMethod } = require("../../controllers/Room/roomController");
const { getAllRooms , getAllRoomsById } = require("../../controllers/Room/roomManagement");

const paymentRouter = Router();

paymentRouter.post("/payment", paymentMethod);
paymentRouter.post("/addRoom", addRoomMethod); 
paymentRouter.put("/editRoom/:id", editRoomMethod); 
paymentRouter.get("/getRoomById/:id", getAllRoomsById); 
paymentRouter.get("/getAllRooms", getAllRooms); 





module.exports = paymentRouter;

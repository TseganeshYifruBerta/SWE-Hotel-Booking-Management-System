const { Router } = require("express");

const {
  paymentMethod,
} = require("../../controllers/payment/paymentController");
const {
  addRoomMethod,
} = require("../../controllers/Room/roomController");
const paymentRouter = Router();

paymentRouter.post("/payment", paymentMethod);
paymentRouter.post("/addRoom", addRoomMethod);


module.exports = paymentRouter;

const { Router } = require("express");

const {
  paymentMethod,
} = require("../../controllers/payment/paymentController");
const paymentRouter = Router();

paymentRouter.post("/payment", paymentMethod);

module.exports = paymentRouter;

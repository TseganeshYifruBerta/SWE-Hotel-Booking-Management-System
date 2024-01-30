const { Router } = require("express");

const {
  paymentMethod,
} = require("../../controllers/payment/paymentController");
const {
  getAllPaymentDetailByUserId,
  getAllPayments,
} = require("../../controllers/payment/paymentManagement");  

const paymentRouter = Router();

paymentRouter.post("/payment", paymentMethod);

// paymentRouter.get("/getPaymentByUserId/:id", getAllPaymentDetailByUserId);
paymentRouter.get("/getPayments", getAllPayments);



module.exports = paymentRouter;

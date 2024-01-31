const { Router } = require("express");

const {
  paymentMethod,
} = require("../../controllers/payment/paymentController");
const {
  getAllPaymentDetailByUserId,
  getAllPayments,
} = require("../../controllers/payment/paymentManagement");  

const { emailSend } = require("../../controllers/payment/emailSender")
const paymentRouter = Router();

paymentRouter.post("/payment", paymentMethod);

// paymentRouter.get("/getPaymentByUserId/:id", getAllPaymentDetailByUserId);
paymentRouter.get("/getPayments", getAllPayments);  


paymentRouter.post("/emailsender", emailSend);  







module.exports = paymentRouter;

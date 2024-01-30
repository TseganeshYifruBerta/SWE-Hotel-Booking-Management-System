const Payment = require("../../models/payment/paymentModel")


const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    if (!payments) {
      return res.sendStatus(400);
    }
    return res.status(200).json(payments);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};


module.exports = { getAllPayments };
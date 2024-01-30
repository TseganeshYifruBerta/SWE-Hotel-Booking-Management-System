const { Router } = require("express");

const { addFeedbackMethod } = require("../../controllers/feedback/feedback");
const { getAllFeedback } = require("../../controllers/feedback/manageFeedback");

const feedbackRouter = Router();

feedbackRouter.post("/feedback", addFeedbackMethod);

// feedbackRouter.get("/getPaymentByUserId/:id", getAllPaymentDetailByUserId);
feedbackRouter.get("/getAllFeedbacks", getAllFeedback);

module.exports = feedbackRouter;

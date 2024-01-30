const Feedback = require("../../models/feedback/feedback");

const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findAll();
    if (!feedback) {
      return res.sendStatus(400);
    }
    return res.status(200).json(feedback);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

module.exports = { getAllFeedback };

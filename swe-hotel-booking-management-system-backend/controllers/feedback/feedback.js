const Feedback = require("../../models/feedback/feedback");


const addFeedbackMethod = async (req, res) => {
  const { email, message} = req.body;
  try {

    const addFeedback = await Feedback.create({
      email,
      message,
      
    });

    res.status(200).json(addFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the room",
      error: error.message,
    });
  }
};




module.exports = { addFeedbackMethod };

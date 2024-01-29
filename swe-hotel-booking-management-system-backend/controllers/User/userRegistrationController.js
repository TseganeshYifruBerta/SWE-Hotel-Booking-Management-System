const User = require("../../models/User.js");
const { v4: uuidv4 } = require("uuid");

const createUser = async (req, res) => {
  const { name, phoneNumber, password } = req.body;
  const Id = uuidv4();
  try {
    const newUser = await User.create({
      uuid: Id,
      name,
      phoneNumber,
      password,
    });

    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "An error occurred while creating the student",
        error: error.message,
      });
  }
};

module.exports = { createUser };

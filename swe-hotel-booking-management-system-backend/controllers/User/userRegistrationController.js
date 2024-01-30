const User = require("../../models/User.js");
const { v4: uuidv4 } = require("uuid");

const createUser = async (req, res) => {
  const { name, phoneNumber, password } = req.body;
  const Id = uuidv4();
  try {
    const existedphoneNumber = await User.findOne({
      where: {
        phoneNumber: phoneNumber,
      },
    });
    if (existedphoneNumber) {
      return res.status(403).json({
        message: "The  phoneNumber is already in use",
      });
    }
    const newUser = await User.create({
     
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
        message: "An error occurred while registering",
        error: error.message,
      });
  }
};

module.exports = { createUser };

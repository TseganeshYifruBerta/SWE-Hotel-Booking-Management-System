const User = require("../../models/auth/User");
const logginUser = require("../../models/auth/loginUser");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const generateSecretKey = () => {
  const secretLength = 32; // Adjust the length as per your requirements
  return crypto.randomBytes(secretLength).toString("hex");
};
const userLogin = async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        phoneNumber,
      },
    });
    const name = user.name;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const secretKey = generateSecretKey();
    // const email = user.email;
    const tokenExpiration = "2d";
    const token = jwt.sign({ phoneNumber }, secretKey, {
      expiresIn: tokenExpiration,
    });

    const loggedInUser = await logginUser.create({
      name: name,
      phoneNumber,
      token,
      password,
    });

    res.status(200).json({ loggedInUser, token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { userLogin };

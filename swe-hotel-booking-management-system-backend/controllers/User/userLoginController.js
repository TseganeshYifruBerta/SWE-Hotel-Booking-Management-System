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
    if (phoneNumber == "0123456789" && password == "123456789"){
      const data = {
        phoneNumber,
        password
      };
      return res.status(200).json({data,  message: "Admin" });
    }
    const user = await User.findOne({
      where: {
        phoneNumber,
      },
    });
    


    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
     const name = user.name;
    const secretKey = generateSecretKey();
    // const email = user.email;
    const tokenExpiration = "2d";
    const token = jwt.sign({ phoneNumber }, secretKey, {
      expiresIn: tokenExpiration,
    });

    const data = await logginUser.create({
      name: name,
      phoneNumber,
      token,
      password,
    });

    res.status(200).json({ data, message: "User" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { userLogin };

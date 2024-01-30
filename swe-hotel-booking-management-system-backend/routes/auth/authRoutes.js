const { Router } = require("express");

const {createUser} = require('../../controllers/User/userRegistrationController');
const {
  userLogin,
} = require("../../controllers/User/userLoginController");

const router = Router();

router.post("/signup",createUser );
router.post("/login", userLogin);



module.exports = router;

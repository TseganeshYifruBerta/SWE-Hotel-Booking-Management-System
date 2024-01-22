const { Router } = require("express");

const {createUser} = require('../../controllers/User/userRegistrationController')
const router = Router();

router.post("/signup",createUser );
router.post("/login", );


module.exports = router;

const express = require("express");
const router = express.Router();

const {signUp} = require("../controller/auth");

// router.post("/logIn", logIn);
router.post("/signUp", signUp);

module.exports = router;
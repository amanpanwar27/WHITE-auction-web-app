const express = require("express");
const logincontroller = require("../controllers/logincontroller");
const signupcontroller = require("../controllers/signupcontroller");
const profilecontroller = require("../controllers/profilecontroller");
const router = express.Router();
const isauthorized = (req, res, next) => {
  console.log(req.headers);
};

router.post("/login", signupcontroller.postsignup);
router.post("/profile", logincontroller.postlogin);
router.get("/profile", isauthorized, profilecontroller.getprofile);
module.exports = router;

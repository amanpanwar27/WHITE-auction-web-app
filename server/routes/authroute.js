const express = require("express");
const logincontroller = require("../controllers/logincontroller");
const signupcontroller = require("../controllers/signupcontroller");
const profilecontroller = require("../controllers/profilecontroller");
const RoomModal = require("../models/roomschema");
const router = express.Router();
const isauthorized = (req, res, next) => {
  console.log(req.headers);
};

router.post("/login", signupcontroller.postsignup);
router.post("/profile", logincontroller.postlogin);
// router.post("/getmaxbid", async(req, res) => {
//   console.log("********** api called",req.body);
//   await RoomModal.findOne(
//     {
//       roomname: req.body.roomname,
//     },
//     (err,doc) => {
//       if (err) console.log(err);
//       else {
//         console.log(doc);
//         res.send({
//           maxbid: doc.maxbid,
//         });
//       }
//     }
//   );
// });
router.get("/profile", isauthorized, profilecontroller.getprofile);
module.exports = router;

const userschema = require("../models/userschema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports.postlogin = (req, res) => {
  console.log("req : ", req.body);
  userschema.find({ username: req.body.username }, (err, doc) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!doc) {
      res.status(404).send({
        message: "user not found",
      });
      return;
    }
    console.log(doc);
    bcrypt.compare(req.body.password, doc[0].password, (err, isuser) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!isuser) {
        res.status(401).send({
          message: "wrong credentials",
        });
        return;
      }
      const accesstoken = jwt.sign(
        doc[0].id,
        process.env.SUCESS_TOKEN_SECRET_KEY
      );
      console.log(accesstoken);
      res.json({ accesstoken: accesstoken });

    });
  });
};

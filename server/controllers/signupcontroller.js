const userschema = require("../models/userschema");
const bcrypt = require("bcryptjs");
require("dotenv").config();
module.exports.postsignup = (req, res) => {
  userschema.findOne({ username: req.body.username }, (err, doc) => {
    if (doc)
      return res.status(409).send({
        message: "user already exists",
      });
  });
  if (req.body.password !== req.body.confirm_password)
    return res.status(403).send({
      message: "wrong password",
    });
  else {
    bcrypt.hash(req.body.password, 10, (err, hashed) => {
      if (err) console.log(err);
      userschema.create(
        {
          username: req.body.username,
          password: hashed,
          confirm_password: hashed,
        },
        (err, doc) => {
          if (err) console.log(err);
          console.log(doc);
          res.status(200).send({ message: "sucecssfully signed up" });
        }
      );
    });
  }
};

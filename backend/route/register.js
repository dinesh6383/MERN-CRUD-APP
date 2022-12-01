const router = require("express").Router();
const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/", (req, res) => {
  User.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  User.findOne({ email: req.body.email }, (err, result) => {
    if (err) {
      res.status(400).json(err);
    }
    if (!result) {
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        const userDetail = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });

        userDetail.save((err) => {
          if (err) {
            res.status(400).json(err);
          } else {
            res.json("Added into DB");
          }
        });
      });
    } else {
      res.send("User already registered!");
    }
  });
});

module.exports = router;

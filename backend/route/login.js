const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../model/user.model");

router.get("/", (req, res) => {
  res.send("Welcome to login page");
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      res.status(400).json(err);
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, (err, result) => {
          if (!err && result) {
            res.send(foundUser);
            // res.redirect(`/todo/${foundUser._id}`);
          } else {
            res.json("Incorrect username & password!");
          }
        });
      } else {
        res.json("User not found!");
      }
    }
  });
});

module.exports = router;

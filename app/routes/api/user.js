const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10

const User = require("../../models/user");

router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {

  User.create({
    email: req.body.email,
    password: hash
  })
  .then(dbUser => {
    res.json(dbUser)
  })
  .catch(err => {
    res.json(err)
  })
  })
})

router.post("/login", (req, res) => {
  User.find({email: req.body.email})
  .then(dbUser => {
    if (dbUser) {
    bcrypt.compare(req.body.password, dbUser.password, (err, response) => {
      if (response) {
        res.json(dbUser)
      }
      else {
        res.status(205).json({error: "Login error"})
      }
    })
    }
    else {
      res.status(205).json({error: "Login errorr"})
    }
  })
})


// need to delete this
router.post("../../src/components/accountBox/signupForm.jsx", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
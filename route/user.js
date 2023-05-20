const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const registerUser = require("../controllers/user");
const config = require("config");
const auth = require("../middleware/auth");

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please Provide valid email address"),
    check("password", "please enter atleast 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { name, contact, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.send("User Already Exists");
      }
      user = new User({
        name,
        email,
        contact,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("secretKey"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

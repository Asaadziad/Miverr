const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../services/models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new User({
      email: email,
      username: username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;

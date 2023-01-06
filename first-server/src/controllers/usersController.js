const bcrypt = require("bcrypt");
const User = require("../services/models/User");

const jwt = require("jsonwebtoken");

//@desc register new user
//@route POST /api/users/register
const registerUser = async (req, res) => {
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
};

//@desc login user
//@route POST /api/users/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ accessToken: generateToken(user._id) });
    } else {
      res.status(400);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
};

//@desc get Data
//@route /api/users/me
const getMe = async (req, res) => {
  const data = await User.findById(req.user.id);
  res.json(data);
  console.log(req.user);
};

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, loginUser, getMe };

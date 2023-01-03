const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

const mongoDB = "mongodb://127.0.0.1:27017/miverr-db";
mongoose.set("strictQuery", false);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const User = require("./src/utilities/User");
app.post("/signup", async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const savedUser = user.save();
    res.status(201).json(savedUser);
    console.log("worked");
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(5000, () => {
  console.log("Server started listening on port 5000");
});

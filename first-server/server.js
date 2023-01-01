const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["asaad", "testing"] });
});
const test = [{ id: 1, title: "Jacket", price: 5456, description: "testing" }];
app.get("/products", (req, res) => {
  res.json(test);
});

app.post("/sign-up", (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(5000, () => {
  console.log("Server started listening on port 5000");
});

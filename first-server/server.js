const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["asaad", "testing"] });
});
const test = [{ id: 1, title: "Jacket", price: 5456, description: "testing" }];
app.get("/products", (req, res) => {
  res.json(test);
});

app.listen(5000, () => {
  console.log("Server started listening on port 5000");
});

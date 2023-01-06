const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./src/services/db");
const userRoutes = require("./src/routes/usersRoute");

//Dotenv configuration start
dotenv.config();

const port = process.env.PORT || 5000;

//db connection start
connection();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log("Server started listening on port 5000");
});

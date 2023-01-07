const express = require("express");
const usersController = require("../controllers/usersController");
const { authenticateUser } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);
router.get("/me", authenticateUser, usersController.getMe);

module.exports = router;

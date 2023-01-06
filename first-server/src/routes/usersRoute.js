const express = require("express");
const usersController = require("../controllers/usersController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);
router.get("/me", protect, usersController.getMe);

module.exports = router;

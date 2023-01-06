const jwt = require("jsonwebtoken");
const User = require("../services/models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];

      //Verify
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      //get user
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
    }
  }
  if (!token) {
    res.status(401);
  }
};

module.exports = { protect };

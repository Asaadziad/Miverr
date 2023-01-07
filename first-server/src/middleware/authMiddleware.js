const jwt = require("jsonwebtoken");
const User = require("../services/models/User");

const authenticateUser = async (req, res, next) => {
  let token;
  // try {
  //Get token
  token = req.cookies;
  console.log(token);
  //Verify
  /*const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);
    //get user
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
  }*

  if (!token) {
    res.status(401);
  }*/
};

module.exports = { authenticateUser };

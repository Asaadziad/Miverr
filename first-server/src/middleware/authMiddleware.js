const jwt = require("jsonwebtoken");
const User = require("../services/models/User");

const authenticateUser = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    try {
      const userId = jwt.verify(
        authorization,
        process.env.ACCESS_TOKEN_SECRET
      ).id;

      //get user
      req.user = await User.findById(userId);
      next();
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .send('{ "status":"failed", "message":"Unauthorized user"}');
    }
  }
};

module.exports = { authenticateUser };

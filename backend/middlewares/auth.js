const jwt = require("jsonwebtoken");
const config = require('../config');


function authMiddleware(req, res, next) {
  const authorizationHeader = req.headers['authorization'];
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' });
      } else {
        //Verify user from DB here
        req.currentUser = user;
        next();
      }
    });
  } else {
    res.status(403).json({
      error: 'No token provided'
    });
  }
}

module.exports = {
  auth: authMiddleware
  }

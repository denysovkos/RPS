const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const port = 3001;
const cors = require('cors');

const config = require('./config');
const authMiddleware = require('./middlewares/auth');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let whitelist = [
//     'http://0.0.0.0:3000','http://localhost:3000','http://0.0.0.0:3001','http://localhost:3001'
// ];
// let corsOptions = {
//     origin: (origin, callback) => {
//         let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//         callback(null, originIsWhitelisted);
//     },
//     credentials: true
// };
app.use(cors());

console.log('authMiddleware', authMiddleware)

app.get("/api/", authMiddleware.auth, function(req, res) {
  res.json({ message: "Hi, welcome to the server api!" });
});

//const JWT_SECRET = "KD JWT SECRET HEEHHHHHHH!";



app.post("/api/login", function(req, res) {
  console.log("Requesting /api/login ...");

  const credentials = req.body;

  if (credentials.user === "admin" && credentials.password === "password") {
    const profile = { user: credentials.user, role: "ADMIN" };
    const jwtToken = jwt.sign(profile, config.JWT_SECRET, { expiresIn: 5 * 60 });
    res.status(200).json({
      id_token: jwtToken
    });
  } else {
    res.status(401).json({ message: "Invalid user/password" });
  }
});

function extractToken(req) {
  if (
    req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
}

app.post("/api/logout", function(req, res) {
  console.log("Requesting /api/logout ...");

  const jwtToken = extractToken(req);
  try {
    const profile = jwt.verify(jwtToken, config.JWT_SECRET);
    res.status(200).json({ message: `User ${profile.user} logged out` });
  } catch (err) {
    console.log("jwt verify error", err);
    res.status(500).json({ message: "Invalid jwt token" });
  }
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});

const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization;
    if (authHeader) {
     const token = authHeader.split(" ")[1];
     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
       if (err) {
      return res.status(401).json({ error: "err in token " });
       }
       req.user = user;
       next();
     });
   } else {
  res.status(411).json({msg:"You are not authorized to access this route"});
   }
}

module.exports = userMiddleware;
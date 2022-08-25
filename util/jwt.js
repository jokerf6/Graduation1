import passport from "passport";
import jwt from "jsonwebtoken";
console.log("jwt");
function authenticateWithJWT(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    console.log(token);
    console.log(process.env.ACCESS_TOKEN_SECRET);
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(data);
    req.userId = data.userId;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
}

export default {
  authenticateWithJWT,
};

import passport from "passport";
import jwt from "jsonwebtoken";
import Responses from "./response";
function authenticateWithJWT(req, res, next) {
  const token = req.cookies.access_token;
  console.log("here ", req.cookies);

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
function authadmin(req, res, next) {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    console.log("kl");
    console.log(process.env.ACCESS_TOKEN_SECRET);
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(data);
    req.userId = data.userId;
    req.userRole = data.role;
    if (data.role !== "admin") {
      return Responses.forbidden(
        res,
        "Forbeddin",
        "Tou canot access this page"
      );
    }
    return next();
  } catch {
    return res.sendStatus(403);
  }
}
export default {
  authadmin,
  authenticateWithJWT,
};

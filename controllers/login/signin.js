import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Responses from "../../util/response";
import connection from "../../util/connection";
async function login(req, res, next) {
  try {
    const { user } = req.models;

    const { email, password } = req.body;
    console.log(email, password);
    if (!email) {
      return Responses.badRequest(res, "400", " email cannt be empty ");
    }
    if (!password) {
      return Responses.badRequest(res, "400", " password cannt be empty ");
    }
    const newuser = await user.findOne({ where: { email } });

    if (newuser === null) {
      return Responses.badRequest(res, "400", " user not found ");
    }

    const checkpassword = await bcrypt.compare(password, newuser.password);
    console.log(checkpassword, " ", false);

    if (!checkpassword) {
      return Responses.badRequest(
        res,
        "InvalidCredentials",
        "Email or password is incorrect"
      );
    }

    if (!newuser.emailVerified) {
      return Responses.forbidden(
        res,
        "Email not verifird",
        "Email not verified"
      );
    }
    const accessToken = jwt.sign(
      { userId: user.userId, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: 2 * 24 * 60 * 60 }
    );
    const refreshToken = jwt.sign(
      { userId: user.userId, role: user.role },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: 2 * 24 * 60 * 60 }
    );
    return Responses.success(res, "logged in Successfully", {
      newuser,
      access_token: accessToken,
      refresh_token: refreshToken,
      role: user.role,
    });
  } catch (err) {
    return next(err);
  }
}
export default login;

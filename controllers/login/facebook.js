import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import Responses from "../../util/response";
import bcrypt from "bcrypt";

async function facebook(req, res, next) {
  try {
    const { user } = req.models;

    console.log(req.user.name);
    const existingUser = await user.findOne({
      where: { email: req.user.emails[0].value },
    });
    // if user exists return the user
    console.log(existingUser, " ", true);
    if (existingUser) {
      return Responses.success(res, "sign in", existingUser);
    }
    const hashPassword = await bcrypt.hash("google", 10);
    const User = await user.create({
      firstName: req.user.name.givenName,
      lastName: req.user.name.familyName,
      email: req.user.emails[0].value,
      password: hashPassword,
      emailVerified: true,
    });
    return Responses.success(res, "Signup Succesfully", User);
  } catch (error) {
    return next(error);
  }
}

export default facebook;

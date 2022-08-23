import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import connection from "./util/connection.js";
import Responses from "./util/response.js";
import nodemailer from "nodemailer";
import SetupModels from "./models/setupmodels.js";
import path from "path";
import { fileURLToPath } from "url";
import Cors from "cors";
import passport from "passport";
import FacebookStrategy from "passport-facebook";
import GoogleStrategy from "passport-google-oauth2";
import { init } from "./models/user";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import { Strategy, ExtractJwt } from "passport-jwt";
import APIRouter from "./routes/APIRouter.js";
import session from "express-session";
import logincontrol from "./controllers/login/logincontrol.js";
import { info } from "console";
dotenv.config();
process.env.ACCESS_TOKEN_SECRET;
process.env.FACEBOOK_CLIENT_ID;
process.env.FACEBOOK_CLIENT_SECRET;

const app = express();

app.use(Cors());

const JwtStrategy = Strategy;
try {
  await SetupModels(connection);
  await connection.authenticate();
  await connection.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.use(async (req, res, next) => {
  req.models = connection.models;

  next();
});
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views/html"));
app.use(express.static(__dirname + "/views/javascript"));
app.use(express.static(__dirname + "/videos"));
app.use(express.static(__dirname + "/audios"));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(morgan("dev"));
app.use("/", APIRouter);
app.use("/assets", express.static("assets"));

/******Google******/
console.log(process.env.GOOGLE_CLIENT_ID);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
/******facebook***/
let user;
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["id", "emails", "name", "displayName", "photos"],
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

/********************* */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

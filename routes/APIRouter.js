import Router from "express";
import login from "./auth/login.js";
import homepage from "./auth/homepage.js";
import signup from "./auth/register.js";
import forgetpassword from "./auth/forgetpassword";
import changepassword from "./auth/changepassword";
import verifychangepassword from "./auth/verifychangepassword";
import verifyemail from "./auth/verifyemail";
import google from "./auth/google";
import facebook from "./auth/facebook";
import dashboard from "./dashboard/dashboard";
import admin from "./admin/admin";
import jwt from "../util/jwt.js";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

const swaggerDocs = YAML.load("swagger.yaml");

const router = Router();
router.use("/", homepage);
router.use("/", login);
router.use("/", signup);
router.use("/signin", forgetpassword);
router.use("/signin", changepassword);
router.use("/signin/verifycode", verifychangepassword);
router.use("/signup/verifyemail", verifyemail);
router.use("/", google);
router.use("/", facebook);
router.use("/dashboard", jwt.authenticateWithJWT, dashboard);
router.use("/admin", jwt.authadmin, admin);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default router;

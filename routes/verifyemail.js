import { Router } from "express";
import Responses from "../util/response";
import logincontrol from "../controllers/login/logincontrol";
const router = Router();

router.post("/:id", logincontrol.verifyemail);

export default router;

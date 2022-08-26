import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import dashboard from "../../controllers/dashboard/dashboard";
import passport from "passport";
import { userInfo } from "os";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../views/html/dashboard.html"));
});
router.get("/data", dashboard);
export default router;

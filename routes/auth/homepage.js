import Router from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const router = Router();
router.get("/", (req, res) => {
  return res.redirect("../views/html/index.html");
});
export default router;

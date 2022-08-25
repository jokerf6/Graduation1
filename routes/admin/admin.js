import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import admincontroller from "../../controllers/admin/admincontroller";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

router.get("/addvideos", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../views/html/addvideos.html"));
});
//router.post("/addvideos", admincontroller);
export default router;

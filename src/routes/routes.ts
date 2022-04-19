import { Router } from "express";
import auth from "../middleware/auth";
import {logic } from "../controller/v1/usercontroller";
import { deviceController } from "../controller/v1/devicecontroller";

const router = Router();

router.post("/signup",logic.signup);
router.post("/login",logic.login);
router.post("/adddevice", auth, deviceController.adddevice);
router.get("/getdevice/:id", auth, deviceController.getdevicebyid);
router.put("/updatedevice/:id", auth, deviceController.updatebyid);
router.delete("/deletedevice/:id", auth, deviceController.removebyid);

export default router;

import { Router } from "express";
// import  login from '../controller/user.login';
import { signup, login } from "../controller/usercontroller";
import  {adddevice,getdevicebyid,removebyid,updatebyid} from "../controller/devicecontrolller";


const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/adddevice", adddevice)
router.get("/getdevice/:id", getdevicebyid)
router.put("/updatedevice/:id", updatebyid)
router.delete("/deletedevice/:id", removebyid)


export default router;

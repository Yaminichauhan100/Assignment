import express from "express";
import { Request, NextFunction, Response } from "express";
import md5 from "md5";
import User from "../model/user.model";
import device from "../model/device.model";
import U_Schema from "../validation/user.validation";
export const app = express();
app.use(express.json());

async function adddevice(req: Request, res: Response, next: NextFunction) {
  try {
    await U_Schema.validateAsync(req.body);
    const {
      firstName,
      lastName,
      email,
      password,
      devicetype,
      devicename,
      model,
      status,
    } = req.body;
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).json("User Already Exist");
    } else {
      const encryptedPassword = md5(password);
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: encryptedPassword,
      });
      const user_id = user._id;
      const Device = await device.create({
        devicetype,
        devicename,
        model,
        status,
        user_id
      });
      res.status(201).json({ "device added succesfully": user, Device });
    }
  } catch (err) {
    console.log(err);
  }
}
const getdevicebyid = async (req: any, res: any) => {
  try {
    const _id = req.params.id;
    const Data = await device.findById(_id);
    res.send(Data);
  } catch (err) {
    res.send(err);
  }
};
const updatebyid = async (req: any, res: any) => {
  try {
    const _id = req.params.id;
    const Dataupdated = await device.findByIdAndUpdate(_id, req.body);
    res.send("Dataupdated");
  } catch (err) {
    res.send(err);
  }
};
const removebyid = async (req: any, res: any) => {
  try {
    const _id = req.params.id;
    const Datadeleted = await device.findByIdAndDelete(_id);
    res.send("Datadeleted");
  } catch (err) {
    res.send(err);
  }
};
export { adddevice, getdevicebyid, removebyid, updatebyid };

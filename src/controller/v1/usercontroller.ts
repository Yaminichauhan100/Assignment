import express from "express";
import { Request, NextFunction, Response } from "express";
import md5 from "md5";
import jwt from "jsonwebtoken";
import User from "../../model/user.model";
import U_Schema from "../../utils/user.validation";
import { STATUS_MSG } from "../../constant/index";
const app = express();
app.use(express.json());

class logicClass {
  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      await U_Schema.validateAsync(req.body);
      const { firstName, lastName, email, password } = req.body;
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.status(409).json("User Already Exist. Please Login");
      } else {
        const user = await User.create({
          firstName,
          lastName,
          email,
          password,
        });

        res.status(201).json({
          "User Signed up succesfully": user,
          status: STATUS_MSG.SUCCESS.CREATED,
        });
      }
    } catch (err: any) {
      res.status(400).json(err.message);
    }
  };

  login = async (req: any, res: any) => {
    try {
      const { email, password } = req.body;

      const user: any = await User.findOne({ email });

      if (user.token) {
        res.json("User is already logged in");
      } else if (md5(password) === user.password) {
        console.log(user.password);
        const data = jwt.sign({ user_id: user._id }, "yamini", {
          expiresIn: "2y",
        });

        user.token = data;
        user.save();
        res.status(200).json({ token: data, message: "login success fully" });
      } else {
        res.status(400).json("Invalid Credentials or user is inactive");
      }
    } catch (err: any) {
      res.status(400).json(err.message);
    }
  };
}
export const logic = new logicClass();

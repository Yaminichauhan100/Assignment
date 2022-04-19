import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export default async function verifytoken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token: string | undefined = req.headers.authorization;
    if (!token) {
      res.status(400).send("Token required fot login");
    } else {
      let data: any = jwt.verify(token, 'yamini');
      req.body.idFromAuth = data;
      next();
    }
  } catch (err) {
    res.status(400).send("Invalid token login again");;
  }
}
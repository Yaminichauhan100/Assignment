import mongoose, { Schema, model } from "mongoose";
import md5 from "md5";
import { User } from "../interface/interface";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const userSchema = new Schema<User>(
  {
    _id: { type: String, default: uuidv4 },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  try {
    console.log(`the current password is ${this.password}`);
    this.password = await md5(this.password);
    console.log(`the current password is ${this.password}`);
    next();
  } catch (err) {
    console.log(err);
  }
});
// userSchema.post("save",async function(next){
//   try{
//       console.log(`the current password is ${this.password}`);
//        this.password = await md5(this.password);
//       console.log(`the current password is ${this.password}`)
//       next();

//   }catch(err){
//       console.log(err);
//   }
// })
const user = model<User>("User", userSchema);

export default user;

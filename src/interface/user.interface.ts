import { ObjectId } from "bson";
export interface User {
     _id:string;
     firstName: string
    lastName: String,
    email: string
    password: string,

    
}
export interface device {
    _id:string;
    devicetype: string
    devicename: string,
    model: string,
    user_id: ObjectId,
    status: boolean
  
    
}

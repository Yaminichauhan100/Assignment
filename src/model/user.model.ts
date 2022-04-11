import mongoose, { Schema, model } from 'mongoose';

import {User} from '../interface/user.interface'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 

const userSchema = new Schema<User>({
    //  _id: { type: String, default: uuidv4 },
  
    
    firstName: {
        type: String,
        required: true
    },
 
    lastName: {
        type: String,
        required: true
    },
      email: {
        type: String,
        required: true,
        unique: true
    },
   
    password: {
        type: String,
        required: true
    },
   },
{
  timestamps: true
}
)
const user = model<User>('User', userSchema);

export default user
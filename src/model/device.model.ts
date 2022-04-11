import mongoose, { Schema, model } from 'mongoose';
import {device} from '../interface/user.interface'
import { v4 as uuidv4 } from 'uuid';
import { ENUM } from '../constant/app.constant'
import { bool, boolean } from 'joi';


const deviceSchema = new Schema<device>({
    _id: { type: String, default: uuidv4 },
    
    devicetype: {
        type: String,
        required: true
    },
    devicename: {
        type: String,
        required: true
    },
      model: {
        type: String,
        required: true,
       
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref: 'user'
    },
    status:{
        type:Boolean,
        enum:ENUM.STATUS
       
    },
   },
{
  timestamps: true
}
)
const device = model<device>('Device', deviceSchema);

export default device
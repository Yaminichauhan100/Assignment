import joi from 'joi'


const U_Schema = joi.object({
  
    firstName:joi.string().min(5).max(25).required(),
    lastName:joi.string().min(4).max(25).required(),
    email: joi.string().email().required(),
    password:joi.string().min(2).required(),
    devicetype:joi.string().min(2).required(),
    devicename:joi.string().min(2).required(),
    model:joi.string().min(2).required(),
    status:joi.number().required(),
   
});

export default U_Schema;
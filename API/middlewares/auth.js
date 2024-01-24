import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { User } from "../Models/user.js";
import Cookies from 'js-cookie';


export const isSignin =async(req,res,next)=>{
    console.log("cookies is : ",req.headers.authorization);
    const userId= req.headers.authorization.replace(/"/g, '');
    console.log(userId);
    if(!userId) return res.status(404).json({
        success: false,
        massage: "plz Login",
        
        
    })

    const decode = jwt.verify(userId, process.env.JWT_SCODE);
    console.log(decode);

    req.user = await User.findById(decode);
    req.p="MD FIROJ AHMED"
    next();
    
}


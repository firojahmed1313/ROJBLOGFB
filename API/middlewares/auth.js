import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { User } from "../Models/user.js";


export const isSignin =async(req,res,next)=>{
    const {token} = req.cookies;
    console.log("cookies is : ",req.cookies);
    console.log("token is : ",token);

    if(!token) return res.status(404).json({
        success: false,
        massage: "plz Login",
        token,
        
    })

    const decode = jwt.verify(token, process.env.JWT_SCODE);

    console.log(decode);

    req.user = await User.findById(decode._id);
    req.p="MD FIROJ AHMED"
    next();
    
}

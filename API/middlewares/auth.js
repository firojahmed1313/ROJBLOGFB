import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { User } from "../Models/user.js";
import Cookies from 'js-cookie';


export const isSignin =async(req,res,next)=>{
    const {tokenf} = req.cookies;
    console.log("cookies is : ",req.cookies);
    console.log("token is : ",tokenf);

    if(!tokenf) return res.status(404).json({
        success: false,
        massage: "plz Login",
        tokendata : tokenf ,
        
    })

    //const decode = jwt.verify(token, process.env.JWT_SCODE);
    //const decode = cookies.get(tokenf)
    console.log(decode);

    req.user = await User.findById(decode._id);
    req.p="MD FIROJ AHMED"
    next();
    
}

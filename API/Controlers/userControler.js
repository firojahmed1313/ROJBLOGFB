import bcrypt from "bcrypt";
import { User } from "../Models/user.js";
import { createCookie } from "../utils/feature.js";

export const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  let userexist = await User.findOne({ email });
  if (userexist)
    return res.status(200).json({
      success: false,
      massage: "User already exist .....",
    });
  const hashPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  createCookie(user, res, "User register successfull");
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  let userexist = await User.findOne({ email });
  if (!userexist)
    return res.status(400).json({
      success: false,
      massage: "User do not exist .....",
    });
  const ismatch = await bcrypt.compare(password, userexist.password);
  if (!ismatch)
    return res.status(400).json({
      success: false,
      massage: "password or email do not match .....",
    });
  createCookie(
    userexist,
    res,
    `Welcome ${userexist.name} and your email is ${userexist.email}`
  );
};

export const userLogout = (req, res) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      massage: "successfully Logout",
    });
};


export const getMyProfile =(req,res)=>{
  res.status(200).json({
    success: false,
    user: req.user,
    admin:req.p
})
} 

export const getuserByid = async (req,res) =>{
  const id = req.params.id;
  const user = await User.findById(id)
    if(!user) return res.status(404).json({
        success: false,
        massage:"User not found "
    })

    res.status(200).json({
        success: true,
        massage:"User Details ",
        user
    })
}

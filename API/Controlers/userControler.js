import bcrypt from "bcrypt";
import { User } from "../Models/user.js";
import { createCookie } from "../utils/feature.js";
import jwt from "jsonwebtoken";


export const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  let userexist = await User.findOne({ email });
  if (userexist)
    return res.status(200).json({
      success: false,
      massage: "User already exist .....",
    });
  /*const hashPassword = await bcrypt.hash(password, 12);*/
  const user = await User.create({
    name,
    email,
    password,
  });
  createCookie(req.body, res, "User register successfull");
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  let userexist = await User.findOne({ email });
  if (!userexist)
    return res.status(400).json({
      success: false,
      massage: "User do not exist .....",
    });
  //const ismatch = await bcrypt.compare(password, userexist.password);
  if (password != userexist.password)
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
export const userResetPassword = async (req, res) => {
  const { email, password } = req.body;
  let userexist = await User.findOne({ email });
  //const ismatch = await bcrypt.compare(password, userexist.password);
  userexist.password = password;
  await userexist.save();
  res.status(200).json({
    success: true,
    massage: "Password changed successfully",
  });
  
};
export const userEmailChack = async (req, res) => {
  const { email } = req.body;
  let userexist = await User.findOne({ email });
  if (!userexist)
    return res.status(400).json({
      success: false,
      massage: "User do not exist .....",
    });
  //const ismatch = await bcrypt.compare(password, userexist.password);
  res.status(200).json({
    success: true,
    massage: "Email is available",
  });
};

export const userLogout = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token found' });
  }

  try {
    // Verify the token
    const decode = jwt.verify(token, process.env.JWT_SCODE);
    
    // Clear the token cookie
    res.clearCookie('token');

    // Respond with a success message
    res.json({ success: true, message: 'Logout successful'});
  } catch (error) {
    // Token verification failed
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
  /*res
    .status(200)
    .clearCookie('token')
    .json({
      success: true,
      massage: "successfully Logout",

    });
};
*/

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
        massage:"User not found"
    })

    res.status(200).json({
        success: true,
        massage:"User Details ",
        user
    })
}

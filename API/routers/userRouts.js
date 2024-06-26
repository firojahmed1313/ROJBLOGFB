import express from "express";
import { userLogin, userLogout, userRegister,getMyProfile, getuserByid, userEmailChack, userResetPassword, userEmailCode } from "../Controlers/userControler.js";
import { isSignin } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>MD FIROJ AHMED</h1>");
});

router.get("/register", (req, res) => {
  res.render("register.ejs");
});

router.post("/api/user/register", userRegister);
router.post("/api/user/chackEmail", userEmailChack);
router.post("/api/user/resetPassword", userResetPassword);
router.post("/api/user/emailCode", userEmailCode);

router.get("/logIn", (req, res) => {
  res.render("logIn.ejs");
});

router.post("/api/user/logIn", userLogin);

router.get("/api/user/logOut", userLogout);

router.get("/user/myProfile",isSignin, getMyProfile);
router.get("/user/:id", getuserByid );


export default router;

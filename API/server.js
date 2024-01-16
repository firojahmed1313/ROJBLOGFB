import express from "express";
import mongoose from "mongoose";
import path from "path";
import { config } from "dotenv";
import userRouters from "./routers/userRouts.js"
import blogRouters from "./routers/blogRouts.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.urlencoded({ extended: true })); // post from data
app.use(express.static(path.join(path.resolve(), "pubic"))); // add static file
app.use(cookieParser())
app.use(cors({
  origin: process.env.FRONTED_URL,
  methods:["GET" ,"POST" , "PUT" , "DELETE"],
  credentials: true,
  optionSuccessStatus:200
}))

config({
  path:"./data/config.env"
})


const PORT = process.env.PORT;

const url = process.env.MONGO_URL;

//MONGOOSE CONNECT
mongoose
  .connect(url, {
    dbName: "ROJBLOG",
  })
  .then(() => {
    console.log("detabase connected");
  })
  .catch((error) => {
    console.log(error());
  });


app.use("/",userRouters);



app.use("/",blogRouters);


/*app.get("/api/user/register" ,(req , res)=>{
    res.json({
        req  
    })
})*/
app.listen(PORT, () => {
  console.log(`open in port ${PORT}`);
});

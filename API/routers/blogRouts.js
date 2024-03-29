import express from "express"
import { changeBlog, createNewBlog, deleteBlog, getAllBlog, getBlogById, getMyBlog ,searchBlog } from "../Controlers/blogControler.js";
import { isSignin } from "../middlewares/auth.js";

const router = express();
router.get("/blog/create",(req,res)=>{
    res.render("createBlog.ejs");
})
router.post("/api/blog/new",isSignin,createNewBlog);

router.post("/api/blog/search",searchBlog);

router.get("/api/blog/myBlog/:id",isSignin,getMyBlog);

router.put("/api/blog/updateBlog/:id",isSignin,changeBlog);

router.delete("/api/blog/deleteBlog/:id",isSignin,deleteBlog);

router.get("/api/blog/allBlog/:id", getAllBlog);

router.get("/api/blog/view/:id", isSignin, getBlogById);

export default router
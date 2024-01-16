import {Blog} from "../Models/blog.js"

export const createNewBlog =async (req,res)=>{

    const { title, description, imgUrl } = req.body;

    const blog = await Blog.create({
        title,
        description,
        imgUrl,
        user: req.user
    });
    res.status(201).json({
        success: true,
        blog
    })
}


export const getMyBlog = async(req,res)=>{
    const userid = req.user._id;
    const blogData = await Blog.find({user:userid})
    res.status(200).json({
        success: true,
        blogData
    })
}


export const changeBlog =async(req,res)=>{
    const { title, description, imgUrl } = req.body;
    const id = req.params.id;

    const blogData = await Blog.findById(id)
    if(!blogData) return res.status(404).json({
        success: false,
        massage:"Blog not found "
    })
    blogData.title=title;
    blogData.description=description;
    blogData.imgUrl=imgUrl;
    blogData.save();
    res.json({
        success: true,
        massage:"update Blog",
        blogData
    })
}


export const deleteBlog =async(req,res)=>{
   
    const id = req.params.id;

    const blogData = await Blog.findById(id)
    if(!blogData) return res.status(404).json({
        success: false,
        massage:"Blog not found "
    })

    res.json({
        success: true,
        massage:"Blog Deleted "
    })
}

export const getAllBlog = async (req,res)=>{
    const allblogData = await Blog.find()
    if(!allblogData) return res.status(404).json({
        success: false,
        massage:"There is no Blog"
    })

    res.json({
        success: true,
        massage:"All Blog ",
        allblogData
    })
}

export const getBlogById =async (req,res) =>{
    const id = req.params.id;

    const blogDatabyid = await Blog.findById(id)
    if(!blogDatabyid) return res.status(404).json({
        success: false,
        massage:"Blog not found "
    })

    res.json({
        success: true,
        massage:"Blog is ",
        blogDatabyid
    })
}


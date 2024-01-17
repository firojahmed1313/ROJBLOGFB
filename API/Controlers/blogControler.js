import {Blog} from "../Models/blog.js"
import mongoose from 'mongoose';

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
        massage:"Blog Added Successfully",
        blog
    })
}


export const getMyBlog = async(req,res)=>{
    const userid = req.user._id;
    const blogData = await Blog.find({user:userid})
    res.status(200).json({
        success: true,
        user: req.user,
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

    const blogData = await Blog.findById(id);
    if(!blogData) return res.status(404).json({
        success: false,
        massage:"Blog not found"
    })
    const filter = { _id: new mongoose.Types.ObjectId(id) }; 

    const result = await Blog.deleteOne(filter);

    res.json({
        success: true,
        massage:"Blog Deleted",
        result
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
        massage:"All Blog",
        
        allblogData
    })
}

export const searchBlog = async (req, res) => {
    const searchTerm = req.body.searchData;

  try {
    const results = await Blog.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
      ],
    });
    //console.log(results);
    /*if(results[0]==null) return res.status(404).json({
        success: false,
        massage:"There is no Blog"
    })*/

    res.json({
        success: true,
        massage:"search Blog",
        results,
        searchTerm
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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


package com.roj.rojblog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roj.rojblog.Model.Blogs;
import com.roj.rojblog.Service.BlogService;

@RestController
public class BlogController {
    @Autowired
    BlogService bs;
    @GetMapping("/blogs")
    public List<Blogs> getBlogList(){
        return bs.getAllBlogs();
    }

    @GetMapping("/myBlog/{id}")
    public Blogs getMyBlogById(@PathVariable String id){
        // Implement logic to retrieve blog by ID
        return null;
    }

    @PostMapping("/create")
    public Blogs addBlog(Blogs blog){
        // Implement logic to add a new blog
        return null;
    }

    @GetMapping("/myAllBlog/{id}")
    public List<Blogs> getMyBlogList(@PathVariable String id){
        // Implement logic to retrieve all blogs by user ID
        return null;
    }

    @PutMapping("/updateBlog/{id}")
    public Blogs updateBlog(@PathVariable String id, Blogs updatedBlog){
        // Implement logic to update a blog
        return null;
    }

    @DeleteMapping("/deleteBlog/{id}")
    public void deleteBlog(@PathVariable String id){
        // Implement logic to delete a blog
        return;
    }


}

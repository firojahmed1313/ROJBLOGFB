package com.roj.rojblog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/blog/{id}")
    public Blogs getMyBlogById(@PathVariable String id){
        // Implement logic to retrieve a blog by ID

        return bs.getBlogById(id);
    }

    @PostMapping("/create")
    public Blogs addBlog(@RequestBody Blogs blog){
        // Implement logic to add a new blog
        System.out.println(blog.toString());
        return bs.createBlog(blog);
    }

    @GetMapping("/myAllBlog/{uId}")
    public List<Blogs> getMyBlogList(@PathVariable String uId){
        // Implement logic to retrieve all blogs by user ID
        return bs.getAllBlogsByUser(uId);
    }

    @PutMapping("/updateBlog/{id}")
    public Blogs updateBlog(@PathVariable String id,@RequestBody Blogs updatedBlog){
        // Implement logic to update a blog
        return bs.updateBlog(id,updatedBlog);
    }

    @DeleteMapping("/deleteBlog/{id}")
    public Blogs deleteBlog(@PathVariable String id){
        
        return bs.deleteBlog(id);
    }


}

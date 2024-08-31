package com.roj.rojblog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}

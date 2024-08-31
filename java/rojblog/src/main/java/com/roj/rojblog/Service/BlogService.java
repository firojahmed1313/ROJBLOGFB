package com.roj.rojblog.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roj.rojblog.Model.Blogs;
import com.roj.rojblog.Repo.BlogRepo;

@Service
public class BlogService {
    @Autowired
    BlogRepo br;
    public List<Blogs> getAllBlogs() {
        

        return br.findAll();
        
    }

}

package com.roj.rojblog.Service;

import java.util.List;

import org.bson.types.ObjectId;
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
    public Blogs getBlogById(String id) {
        return br.findById(id).orElse(null);
    }
    public Blogs createBlog( Blogs blog) {
        System.out.println(blog.toString());
        return br.save(blog);
        //return null;
    }
    
    public List<Blogs> getAllBlogsByUser(String uId) {
        return br.findAllByUser( new ObjectId(uId));
    }

    public Blogs updateBlog(String id, Blogs updatedBlog) {
        Blogs b= br.findById(id).get();
        if(b==null) return null;
        b.setTitle(updatedBlog.getTitle());
        b.setDescription(updatedBlog.getDescription());
        b.setImgUrl(updatedBlog.getImgUrl());
        return br.save(b);
        //return updatedBlog;
        
    }
    public Blogs deleteBlog(String id) {
        Blogs b= br.findById(id).get();
        if(b==null) return null;
        br.delete(b);
        return b;
        //return null;
        
    }

}

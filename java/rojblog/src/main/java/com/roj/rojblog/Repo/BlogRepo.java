package com.roj.rojblog.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.roj.rojblog.Model.Blogs;

public interface BlogRepo extends MongoRepository<Blogs, String> {

    
} 

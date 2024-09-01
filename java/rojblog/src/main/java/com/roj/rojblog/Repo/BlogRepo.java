package com.roj.rojblog.Repo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.roj.rojblog.Model.Blogs;

public interface BlogRepo extends MongoRepository<Blogs, String> {

    List<Blogs> findAllByUser(ObjectId uId);

    
} 

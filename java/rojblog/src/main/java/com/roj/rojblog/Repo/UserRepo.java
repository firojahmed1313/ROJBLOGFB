package com.roj.rojblog.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.roj.rojblog.Model.Users;
@Repository
public interface UserRepo extends MongoRepository<Users,String>  {

    
} 

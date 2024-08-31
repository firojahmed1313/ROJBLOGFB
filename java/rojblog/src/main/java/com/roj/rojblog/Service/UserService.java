package com.roj.rojblog.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roj.rojblog.Model.Users;
import com.roj.rojblog.Repo.UserRepo;
@Service
public class UserService {
    @Autowired
    UserRepo ur;
    public List<Users> getAllUsers() {
        return ur.findAll();
    }

}

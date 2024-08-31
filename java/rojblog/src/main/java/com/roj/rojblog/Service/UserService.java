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
    public Users getusers(String id) {
        return ur.findById(id).orElse(new Users());
    }
    public Users registerUser(Users user) {
        System.out.println(user.toString());
        //return null;
        return ur.save(user);
    }
    public Users loginUser(String email, String password) {
        System.out.println(email + " " + password);
        Users u = ur.findByEmail(email);
        System.out.println(u);
        if(u==null){
            return null;
        }
        if(u.getPassword().equals(password)){
            return u;
        }
        return null;
    }

}

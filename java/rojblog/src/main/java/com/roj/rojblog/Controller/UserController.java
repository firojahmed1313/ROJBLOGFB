package com.roj.rojblog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roj.rojblog.Model.Users;
import com.roj.rojblog.Service.UserService;

@RestController
public class UserController {
    @Autowired
    UserService us;
    @GetMapping("/")
    public String home() {
        return "Home";
    }

    @GetMapping("/users")
    public List<Users> users() {
        return us.getAllUsers();
    }
}

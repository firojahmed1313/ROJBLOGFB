package com.roj.rojblog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping("/users/{id}")
    public Users getUserById(@PathVariable String id) {
        // Implement logic to retrieve user by ID
        return us.getusers(id);
    }

    @PostMapping("/register")
    public Users registerUser(@RequestBody Users user) {
        //System.out.println(user.toString());
        return us.registerUser(user);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        System.out.println(email + " " + password);
        return us.loginUser(email, password);
    }

    @GetMapping("/myProfile")
    public Users myProfile() {
        // Implement logic to retrieve the current user's profile
        return null;
    }
}

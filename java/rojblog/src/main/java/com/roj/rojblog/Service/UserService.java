package com.roj.rojblog.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.roj.rojblog.Controller.LoginRequest;
import com.roj.rojblog.Model.UserPrincipal;
import com.roj.rojblog.Model.Users;
import com.roj.rojblog.Repo.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo ur;

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    JWTService jwtService;

    public List<Users> getAllUsers() {
        return ur.findAll();
    }

    public Users getusers(String id) {
        return ur.findById(id).orElse(new Users());
    }

    public Users registerUser(Users user) {
        System.out.println(user.toString());
        // return null;
        return ur.save(user);
    }

    // public Users loginUser(String email, String password) {
    // System.out.println(email + " " + password);
    // Users u = ur.findByEmail(email);
    // System.out.println(u);
    // if(u==null){
    // return null;
    // }
    // if(u.getPassword().equals(password)){
    // return u;
    // }
    // return null;
    // }
    public String verifyUser(LoginRequest loginRequest) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(loginRequest.getEmail());
        } else {
            return "fail";
        }
    }

    public Users getMyProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof UsernamePasswordAuthenticationToken) {
            UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) authentication;
            Object principal = token.getPrincipal();
    
            if (principal instanceof UserPrincipal) {
                // Cast the principal to your UserPrincipal object
                UserPrincipal userPrincipal = (UserPrincipal) principal;
                
                // Extract user details from UserPrincipal
                System.out.println("Email: " + userPrincipal.getUsername());
                System.out.println("Password: " + userPrincipal.getPassword());
                
                // Return the corresponding Users object from your service
                return ur.findByEmail(userPrincipal.getUsername());
            }else{
                System.out.println("no");
            }
        }
        return null;
    }
    

}

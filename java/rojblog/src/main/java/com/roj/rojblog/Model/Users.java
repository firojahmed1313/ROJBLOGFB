package com.roj.rojblog.Model;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "users")
public class Users {
    private String _id;
    private String name;
    private String email;
    private String password;
    private LocalDateTime createAt = LocalDateTime.now();
    public Users() {
    }
    
    @Override
    public String toString() {
        return "Users [_id=" + _id + ", name=" + name + ", email=" + email + ", password=" + password + ", createAt="
                + createAt + "]";
    }

    public Users(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    public String get_id() {
        return _id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
    public LocalDateTime getCreateAt() {
        return LocalDateTime.now();
    }
    // public void setCreateAt() {
    //     this.createAt = LocalDateTime.now();
    // }

    

    
}

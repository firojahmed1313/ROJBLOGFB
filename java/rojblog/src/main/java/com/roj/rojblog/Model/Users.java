package com.roj.rojblog.Model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "users")
public class Users {
    private String name;
    private String email;
    private String password;
    private Date createAt;
    public Users() {
    }
    public Users(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createAt = new Date(System.currentTimeMillis());
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
    public Date getCreateAt() {
        return createAt;
    }

    

    
}

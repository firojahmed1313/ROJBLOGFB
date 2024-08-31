package com.roj.rojblog.Model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "blogs")
public class Blogs {
    private String title;
    private String description;
    private String imgUrl;
    private String user;
    private Date createAt;
    
    public Blogs() {
    }
    public Blogs(String title, String description, String imgUrl, String user) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.user = user;
        this.createAt = new Date(System.currentTimeMillis());
    }
    public Date getCreateAt() {
        return createAt;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getImgUrl() {
        return imgUrl;
    }
    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }

    


}

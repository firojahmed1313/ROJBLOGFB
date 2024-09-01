package com.roj.rojblog.Model;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "blogs")
public class Blogs {
    private String _id;
    private String title;
    private String description;
    private String imgUrl;
    private ObjectId user;
    private LocalDateTime createAt = LocalDateTime.now();
    
    public Blogs() {
    }
    public Blogs(String title, String description, String imgUrl, String user) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.user = new ObjectId(user);

    }
    @Override
    public String toString() {
        return "Blogs [_id=" + _id + ", title=" + title + ", description=" + description + ", imgUrl=" + imgUrl + ", user="
                + user + ", createAt=" + createAt + "]";
    }
    public String get_id() {
        return _id;
    }
    public LocalDateTime getCreateAt() {
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
    public ObjectId  getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = new ObjectId(user);
    }

    


}

package com.roj.rojblog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.roj.rojblog.Repo.UserRepo;

@EnableMongoRepositories(basePackageClasses = UserRepo.class)
@SpringBootApplication
public class RojblogApplication {

	public static void main(String[] args) {
		SpringApplication.run(RojblogApplication.class, args);
	}

}

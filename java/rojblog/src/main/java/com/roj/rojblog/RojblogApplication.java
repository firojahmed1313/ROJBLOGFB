package com.roj.rojblog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

//@EnableMongoRepositories(basePackageClasses = jobsRepo.class)
@SpringBootApplication
public class RojblogApplication {

	public static void main(String[] args) {
		SpringApplication.run(RojblogApplication.class, args);
	}

}

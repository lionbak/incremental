package com.jw.incremental;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IncrementalApplication {

    public static void main(String[] args) {
        SpringApplication.run(IncrementalApplication.class, args);
        System.out.println("http://localhost:8090/web");
    }

}

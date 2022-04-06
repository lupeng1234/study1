package com.freshmall;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
@MapperScan("com.freshmall.mapper")
public class AdminWebApp {

    public static void main(String[] args) {
        SpringApplication.run(AdminWebApp.class,args);
    }
}

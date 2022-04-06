package com.freshmall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients //开启OpenFeign
public class ProtalWebApp {
    public static void main(String[] args) {
        SpringApplication.run(ProtalWebApp.class,args);
    }
}

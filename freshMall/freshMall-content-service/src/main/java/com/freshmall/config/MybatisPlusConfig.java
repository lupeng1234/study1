package com.freshmall.config;

import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author lup
 * @version 1.0
 * @date 2022/4/1 20:09
 * @desc
 */
@Configuration
public class MybatisPlusConfig {

    @Bean
    public PaginationInterceptor createPaginationIntercepter(){
        return new PaginationInterceptor();
    }

}

package com.freshmall.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author lup
 * @version 1.0
 * @date 2022/4/1 11:19
 * @desc
 */
@Controller
public class CommonController {

    /**
     * 进入登录页面
     *
     * @return
     */
    @RequestMapping("/")
    public String login() {
        return "login";
    }

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/welcome")
    public String welcome() {
        return "welcome";
    }

    @RequestMapping("/page_{page}")
    public String page(@PathVariable("page") String page) {
        return page;
    }
}

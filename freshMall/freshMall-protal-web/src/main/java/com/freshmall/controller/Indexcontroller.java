package com.freshmall.controller;


import com.freshmall.client.ContentClient;
import com.freshmall.pojo.Content;
import com.freshmall.utils.ResultCommon;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

/**
 * @author lup
 * @version 1.0
 * @date 2022/4/1 9:49
 * @desc
 */
@Controller
@Slf4j
public class Indexcontroller {

    @Autowired
    private ContentClient contentClient;

    @GetMapping("index0")
    public String index(Model model){
        ResultCommon resultCommon = contentClient.listByCategoryId(1);
        List<Content> content = (ArrayList<Content>) resultCommon.getData();
        model.addAttribute("top_loop_contents", content);
        return "index";
    }



}

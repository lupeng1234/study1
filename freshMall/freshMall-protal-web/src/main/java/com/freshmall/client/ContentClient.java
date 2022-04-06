package com.freshmall.client;


import com.freshmall.utils.ResultCommon;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * @author lup
 * @version 1.0
 * @date 2022/4/1 9:58
 * @desc
 */
@FeignClient(value = "ContentService")
public interface ContentClient {

    @GetMapping("/content/list")
    public ResultCommon list();

    @GetMapping("/content/listByCategoryId/{category_id}")
    public ResultCommon listByCategoryId(@PathVariable("category_id") Integer category_id);
}

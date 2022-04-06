package com.freshmall.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.freshmall.pojo.Content;
import com.freshmall.service.ContentCategoryService;
import com.freshmall.service.IContentService;
import com.freshmall.utils.ResultCode;
import com.freshmall.utils.ResultCommon;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 内容 前端控制器
 * </p>
 *
 * @author bruce
 * @since 2021-09-14
 */
@RestController
@RequestMapping("/content")
@Slf4j
public class ContentController {

    @Autowired
    IContentService contentService;

    @Autowired
    ContentCategoryService categoryService;

    @Value("${server.port}")
    String port;

    @GetMapping("list")
    public ResultCommon list() {
        log.info("我是广告服务，端口是:" + port);
        return ResultCommon.success(ResultCode.SUCCESS, contentService.list());
    }

    @GetMapping("listByCategoryId/{category_id}")
    public ResultCommon listByCategoryId(@PathVariable("category_id") Integer category_id) {
        log.info("我是广告服务，端口是:" + port);
        return ResultCommon.success(ResultCode.SUCCESS, contentService.list(new QueryWrapper<Content>().eq("category_id", category_id)));
    }
}

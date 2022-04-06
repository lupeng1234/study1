package com.freshmall.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.freshmall.client.ContentCategoryClient;
import com.freshmall.pojo.Content;
import com.freshmall.pojo.ContentCategory;
import com.freshmall.service.ContentCategoryService;
import com.freshmall.utils.PageQuery;
import com.freshmall.utils.PageUtils;
import com.freshmall.utils.ResultCode;
import com.freshmall.utils.ResultCommon;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author lup
 * @version 1.0
 * @date 2022/4/1 11:37
 * @desc
 */
@Controller
@RequestMapping("content_category")
@Slf4j
public class ContentCategoryController {

    @Autowired
    public ContentCategoryClient contentCategoryClient;

    @RequestMapping("page/{pageIndex}")
    public String page(@PathVariable("pageIndex") Long pageIndex,
                       @RequestParam(required = false, defaultValue = "6") Long pageSize,
                       @RequestParam(required = false, defaultValue = "") String name, Model model) {
        PageQuery pageQuery = new PageQuery(pageIndex, pageSize, name);
        log.info("客户端--查询的参数是:" + pageQuery);
        ResultCommon<PageUtils<ContentCategory>> resultCommon = contentCategoryClient.page(pageQuery);
        PageUtils<ContentCategory> pageUtils = (PageUtils<ContentCategory>) resultCommon.getData();
        model.addAttribute("pageUtils", pageUtils);
        model.addAttribute("name", name);
        return "tbContentCategory";
    }

    @PostMapping("add")
    @ResponseBody
    public ResultCommon add(ContentCategory contentCategory) {
        return contentCategoryClient.add(contentCategory);
    }


    @GetMapping("/findOne/{id}")
    @ResponseBody
    public ResultCommon findOne(@PathVariable("id") Long id) {
        return contentCategoryClient.findOne(id);
    }

    @PostMapping("update")
    @ResponseBody
    public ResultCommon update(ContentCategory contentCategory) {
        return contentCategoryClient.update(contentCategory);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public ResultCommon delete(@PathVariable("id") Long id) {
        log.info("要删除的ID是:"+id);
        return contentCategoryClient.delete(id);
    }

    @ResponseBody
    @DeleteMapping("/deleteSelectList/{ids}")
    public ResultCommon deleteSelectList(@PathVariable("ids") String ids) {
        log.info("要删除的ID是:"+ids); //117,116,115
        return contentCategoryClient.deleteSelectList(ids);
    }

    @ResponseBody
    @GetMapping("/list")
    public ResultCommon list(){
        return contentCategoryClient.list();
    }
}

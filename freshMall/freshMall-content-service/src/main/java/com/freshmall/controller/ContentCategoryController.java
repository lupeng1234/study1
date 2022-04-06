package com.freshmall.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.freshmall.pojo.Content;
import com.freshmall.pojo.ContentCategory;
import com.freshmall.service.ContentCategoryService;
import com.freshmall.service.IContentService;
import com.freshmall.utils.PageQuery;
import com.freshmall.utils.PageUtils;
import com.freshmall.utils.ResultCode;
import com.freshmall.utils.ResultCommon;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

/**
 * @author lup
 * @version 1.0
 * @date 2022/3/26 15:54
 * @desc
 */
@RestController
@RequestMapping("content_category")
@Slf4j
public class ContentCategoryController {

    @Autowired
    ContentCategoryService contentCategoryService;

    @Autowired
    IContentService contentService;

    @RequestMapping("page")
    public ResultCommon<PageUtils<ContentCategory>> page(@RequestBody PageQuery pageQuery) {
        log.info("服务端--查询的参数是:" + pageQuery);
        QueryWrapper<ContentCategory> queryWrapper = new QueryWrapper<ContentCategory>();
        queryWrapper.like("name", pageQuery.getQueryDatas().get(0));
        queryWrapper.orderByDesc("id");
        IPage<ContentCategory> page = contentCategoryService.page(new Page<ContentCategory>(pageQuery.getPageIndex(), pageQuery.getPageSize()), queryWrapper);
        long total = page.getTotal();
        long pages = page.getPages();
        List<ContentCategory> records = page.getRecords();
        PageUtils<ContentCategory> pageUtils = new PageUtils<ContentCategory>(pageQuery.getPageIndex(), pageQuery.getPageSize(), total, pages, records);
        ResultCommon result = ResultCommon.success(ResultCode.SUCCESS, pageUtils);
        return result;
    }

    @PostMapping("add")
    public ResultCommon add(@RequestBody ContentCategory contentCategory) {
        boolean b = contentCategoryService.save(contentCategory);
        if (b) {
            return ResultCommon.success(ResultCode.SUCCESS);
        } else {
            return ResultCommon.success(ResultCode.FAIL);
        }
    }

    @GetMapping("/findOne/{id}")
    public ResultCommon findOne(@PathVariable("id") Long id) {
        return ResultCommon.success(ResultCode.SUCCESS, contentCategoryService.getById(id));
    }

    @PutMapping("update")
    public ResultCommon update(@RequestBody ContentCategory contentCategory) {
        boolean b = contentCategoryService.updateById(contentCategory);
        if (b) {
            return ResultCommon.success(ResultCode.SUCCESS);
        } else {
            return ResultCommon.fail(ResultCode.FAIL);
        }
    }

    @DeleteMapping("delete/{id}")
    public ResultCommon delete(@PathVariable("id") Long id) {
        List<Content> contents = contentService.list(new QueryWrapper<Content>().eq("category_id", id));
        if (contents.size() > 0) {
            return ResultCommon.success(ResultCode.NO_DELETE);
        } else {
            boolean b = contentCategoryService.removeById(id);
            if (b) {
                return ResultCommon.success(ResultCode.SUCCESS);
            } else {
                return ResultCommon.fail(ResultCode.FAIL);
            }
        }
    }

    @DeleteMapping("/deleteSelectList/{ids}")
    public ResultCommon deleteSelectList(@PathVariable("ids") String ids){
        log.info("要删除的数据:"+ids);
        String[] idArrays = ids.split(",");
        List<String> idList = Arrays.asList(idArrays);
        ResultCommon resultCommon=null;
        boolean success=true;
        for (String id : idList) {
            List<Content> contents = contentService.list(new QueryWrapper<Content>().eq("category_id", id));
            if(contents.size()>0){
                success=false;
                resultCommon=ResultCommon.success(ResultCode.NO_DELETE,"数据编号:"+id+"使用中,勿删除！");
                break;
            }
        }
        if(success){
            boolean b = contentCategoryService.removeByIds(idList);
            if(b){
                return ResultCommon.success(ResultCode.SUCCESS);
            }else{
                return ResultCommon.success(ResultCode.FAIL);
            }
        }else{
            return resultCommon;
        }

    }
}

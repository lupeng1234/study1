package com.freshmall.client;

import com.freshmall.pojo.ContentCategory;
import com.freshmall.utils.PageQuery;
import com.freshmall.utils.PageUtils;
import com.freshmall.utils.ResultCommon;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

/**
 * @author lup
 * @version 1.0
 * @date 2022/4/1 22:11
 * @desc
 */
@FeignClient(value = "ContentService")
public interface ContentCategoryClient {

    @GetMapping("/content_category/list")
    public ResultCommon list();

    @RequestMapping("/content_category/page")
    public ResultCommon<PageUtils<ContentCategory>> page(@RequestBody PageQuery pageQuery);

    @PostMapping("/content_category/add")
    public ResultCommon add(@RequestBody ContentCategory contentCategory);

    @GetMapping("/content_category/findOne/{id}")
    public ResultCommon findOne(@PathVariable("id") Long id);

    @PutMapping("/content_category/update")
    public ResultCommon update(@RequestBody ContentCategory contentCategory);

    @DeleteMapping("/content_category/delete/{id}")
    public ResultCommon delete(@PathVariable("id") Long id);

    @DeleteMapping("/content_category/deleteSelectList/{ids}")
    public ResultCommon deleteSelectList(@PathVariable("ids") String ids);
}

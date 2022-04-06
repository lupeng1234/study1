package com.freshmall.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.freshmall.mapper.ContentCategoryMapper;
import com.freshmall.pojo.ContentCategory;
import com.freshmall.service.ContentCategoryService;
import org.springframework.stereotype.Service;

/**
 * @author lup
 * @version 1.0
 * @date 2022/3/26 15:22
 * @desc
 */
@Service
public class ContentCategoryServiceImpl extends ServiceImpl<ContentCategoryMapper, ContentCategory> implements ContentCategoryService {
}

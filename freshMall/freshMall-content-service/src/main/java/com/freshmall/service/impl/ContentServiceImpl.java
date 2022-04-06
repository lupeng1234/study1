package com.freshmall.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.freshmall.mapper.ContentMapper;
import com.freshmall.pojo.Content;
import com.freshmall.service.IContentService;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 内容 服务实现类
 * </p>
 *
 * @author bruce
 * @since 2021-09-14
 */
@Service
public class ContentServiceImpl extends ServiceImpl<ContentMapper, Content> implements IContentService {

}

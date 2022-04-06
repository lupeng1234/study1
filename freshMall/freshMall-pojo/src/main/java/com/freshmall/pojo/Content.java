package com.freshmall.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * <p>
 * 内容
 * </p>
 *
 * @author bruce
 * @since 2021-09-14
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("tb_content")
public class Content implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 内容主键（1）
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 内容标题（你好，游戏玩家，超级笔记本！）
     */
    private String title;

    /**
     * 内容地址（http://item.shop.com/1.html）
     */
    private String url;

    /**
     * 内容图片（http://image.shop.com/image/activity.jpg）
     */
    private String image;

    /**
     * 内容排序（0）
     */
    private Integer sort;

    /**
     * 内容状态（0：禁用、1：启用）
     */
    private String status;

    /**
     * 类目主键（1）
     */
    private Long categoryId;

    /**
     * 忽略字段
     */
    @TableField(exist = false)
    private String categoryName;

}

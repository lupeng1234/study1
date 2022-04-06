package com.freshmall.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author lup
 * @version 1.0
 * @date 2022/3/26 15:20
 * @desc
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("tb_content_category")
public class ContentCategory {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;

    @TableField(value = "name")
    private String name;
}
# 温度计、液位计组件 Thermometer

温度计、液位计 应用组件

本组件包含温度计`Thermometer`、液位计`ContentGage`两种组件

## 何时使用

温度计、液位计 

## 如何使用

```
npm install ac-thermometer -S

引入

import { Col, Row } from 'tinper-bee';//加载组件库
import { Thermometer, ContentGage } from 'ac-thermometer';//导入应用组件
import 'ac-thermometer/dist/index.css';//加载温度计、液位计样式

```

## 代码演示


## API 

参数 | 类型 | 说明 | 默认值
---|---|---|---
theme|String|Light or Dark|light
value|Number|温度值|0
max|Number|温度计最大值|100
steps|Number|温度计分隔|0
format|String|单位格式|""
size|String|温度计的尺寸.可以是小的(small)、正常(normal)或者大的(large)|normal
height|Number|温度计的高度|200

## 注意事项



## 更新日志

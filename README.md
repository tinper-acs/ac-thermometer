# ac-thermometer

[![npm version](https://img.shields.io/npm/v/ac-thermometer.svg)](https://www.npmjs.com/package/ac-thermometer)
[![Build Status](https://img.shields.io/travis/tinper-bee/ac-thermometer/master.svg)](https://travis-ci.org/tinper-bee/ac-thermometer)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/ac-thermometer/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/ac-thermometer?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/ac-thermometer.svg)](https://david-dm.org/tinper-bee/ac-thermometer#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/ac-thermometer.svg?style=flat)](https://npmjs.org/package/ac-thermometer)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/ac-thermometer.svg)](http://isitmaintained.com/project/tinper-bee/ac-thermometer "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/ac-thermometer.svg)](http://isitmaintained.com/project/tinper-bee/ac-thermometer "Percentage of issues still open")


react ac-thermometer component for tinper-bee

some description...

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```js

npm install ac-thermometer -S

引入

import { Col, Row } from 'tinper-bee';//加载组件库
import { Thermometer, ContentGage } from 'ac-thermometer';//导入应用组件
import 'ac-thermometer/dist/index.css';//加载温度计、液位计样式

```



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

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/ac-thermometer
$ cd ac-thermometer
$ npm install
$ npm run dev
```

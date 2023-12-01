# r-mini-util

### 介绍
r-mini-util 是一个前端工具集，封装了许多常用方法以供使用。
使用它，降低开发成本，提升开发效率！它本身由 `Typescript` 编写，
为开发提供了极佳的便利性！

### 如何使用？
使用 ES Module 方式：
```javascript
import {randomNum} from 'RMiniUtil'

randomNum(5, 10)
```
or
```javascript

import * as rMiniUtil from 'RMiniUtil'

rMiniUtil.randomNum(5, 10)
```
全局变量方式访问：
```javascript
// var rMiniUtil = {/* Source Code */}
rMiniUtil.sst()
```

### 完整 Demo 项目 

你可以访问同目录下的 usage-demo，一个基于 vite 的 demo。其中演示了导入和使用 r-mini-util 的方式。


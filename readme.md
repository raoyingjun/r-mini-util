# r-mini-util

### 介绍
r-mini-util 是一个前端工具集，封装了许多常用方法以供使用。
使用它，降低开发成本，提升开发效率！它本身由 `Typescript` 编写，
为开发提供了极佳的便利性！

### 如何使用？
当你使用 webpakc 或 vite作为构建，你可以使用 ESM 特性：
```javascript
import {randomNum} from 'RMiniUtil'
randomNum(5, 10)

// 或者
import * as rMiniUtil from 'RMiniUtil'
rMiniUtil.randomNum(5, 10)
```

以全局变量方式访问：
```javascript
// rMiniUtil 被设置在 window.rMiniUtil
rMiniUtil.randomNum(5, 10)
```




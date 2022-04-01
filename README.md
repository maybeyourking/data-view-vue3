# Data-View-Vue3
This is a vue3 version of the big data component library that supports vite.
这是vue3版本的支持vite的大数据组件库。此为原项目[DataV](https://github.com/DataV-Team/Datav)的vue3+vite+typeScript重构版，再此感谢原项目作者对开源社区的贡献！

### 安装

#### npm安装
```shell
$ npm install data-view-vue3
```
#### yarn安装
```shell
$ yarn add data-view-vue3
```

### 使用

##### 全量引入

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import view from 'data-view-vue3'
import 'data-view-vue3/dist/style.css'

const app = createApp(App)
app.use(view)
app.mount('#app')
```

```vue
<!-- template --> 
<dv-border-box-1 />
```

##### 按需引入

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import 'data-view-vue3/dist/style.css'

const app = createApp(App)
app.mount('#app')
```

```vue
<script setup>
  import { borderBox1 as dvBorderBox1 } from 'data-view-vue3'
</script>
<template>
  <dv-border-box-1 />
</template>
```

### 关于文档及效果展示

目前重构类组件参数全部依照原项目，效果以及参数请参照原项目[开发文档](http://datav.jiaminghi.com/guide/)。

#### 项目进度（正在重构中...）

- 边框
  - [x] dv-border-Box-1
  - [x] dv-border-Box-2
  - [x] dv-border-Box-3
  - [x] dv-border-Box-4

### 声明

目前此项目遵循MIT开源协议进行开源，如有侵权或侵犯原项目利益，请联系作者删除。

作者邮箱：dingkuake@yeah.net
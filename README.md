# Data-View-Vue3
This is a vue3 version of the big data component library that supports vite.

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

```js
import { createApp } from 'vue'
import App from './App.vue'

import view from 'data-view-vue3'
import 'data-view-vue3/dist/style.css'

const app = createApp(App)
app.use(view)
app.mount('#app')

// 按需引入
import { borderBox1 } from 'data-view-vue3'
app.use(borderBox1)

// template
import { borderBox1 as dvBorderBox1 } from 'data-view-vue3'
```
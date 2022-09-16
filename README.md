# vue3.0实现todolist
> 这是一个vue的入门项目，所以说明包含很多基础知识。供初学者学习。
## node安装淘宝镜像
```node
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 安装vue
```node
npm install -g cnpm@6.2.0 --registry=https://registry.npmmirror.com

cnpm i -g vue @vue/cli
```

## vue项目下各文件夹功能
node_modules  //存放依赖
public
	index.html 用于引入cdn或者静态资源文件
src 源文件
	1 .assets 存放静态资源
	2. components 存放组件
	3. router 存放路由
	4. store 配置状态管理
	5. views 存放路由组件
	6. app.vue 根组件
	7. main.js 入口文件 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 开发入口组件
HomeView.vue
```vue
<template>
<!--  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  props: {
	//从父组件继承
  },
  components: {
    // HelloWorld， 引用的子组件
  },
  setup (props, ctx) {
    //这里编写js
    return {
		//这里返回在模板里需要用到的变量
    }
  }
})
</script>
```

## vue基础
    使用模块化方法 import,export
    引用依赖库 ref，reactive，toRefs
    关键字 components, setup, props,ctx

## 版本3

## 这是test分支

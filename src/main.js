//开始操作吧
import { createApp } from 'vue'
//引入elementplus相关组件
import ElementPlus from 'element-plus'
//引入elementplus样式
import 'element-plus/dist/index.css'

//引入elementplus国际化的申明
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//引入elementplus字体图标相关组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//引入elementplus暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

//引入路由配置
import router from './router/index.js'

import './mock/index.js'

//引入状态配置
import store from './store/index.js'

//引入App.vue组件
import App from './App.vue'


const app = createApp(App)//创建实例

//全局注册elementplus组件
app.use(ElementPlus, {
  locale: zhCn,
})
//注册elementplus字体图标相关组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册路由
app.use(router)
// 注册vuex状态管理
app.use(store)
//实例挂在到#app
app.mount('#app')


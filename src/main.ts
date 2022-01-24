import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ant from "./utils/ant";
import { Icon } from 'vant';

import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式
import "./utils/rem"
import "./style/index.scss"
 // 全局引入样式
createApp(App)
.use(router)
.use(store)
  .use(ant)
  .use(Icon)
.mount('#app')

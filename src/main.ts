import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ant from "./utils/ant";
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; 
import "./utils/rem"
import "./style/index.scss"
const dev=import.meta.env?.DEV||false;
import VConsole from 'vconsole';
import globComponent from './utils/globComponent'
const app =createApp(App)
globComponent(app)
if(dev){
    new VConsole()
}
app
.use(router)
.use(store)
.use(ant)
.mount('#app')

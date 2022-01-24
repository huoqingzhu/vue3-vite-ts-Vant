import {Button,Tab, Tabs,Search,Col, Row,Tabbar, TabbarItem,Loading,Swipe,SwipeItem,} from 'vant'
import IconFont from "../components/Icon/createIcon";//自定义图标库
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
    use: (arg0: any,) => void;
  }) {
    Vue.component(Button.name, Button);
    Vue.use(Tabs);
    Vue.use(Tab);
    Vue.use(Search);
    Vue.use(Col);
    Vue.use(Row);
    Vue.component("Icon-font", IconFont);
    Vue.use(Tabbar);
    Vue.use(TabbarItem)
    Vue.use(Loading)
    Vue.use(Swipe)
    Vue.use(SwipeItem)
  }
};
export default ant;

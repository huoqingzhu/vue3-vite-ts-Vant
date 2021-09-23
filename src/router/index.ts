import { createRouter, createWebHashHistory, RouteRecordRaw,createWebHistory} from "vue-router";
const modules = import.meta.globEager('./home/*.ts')
export const routerList = Object.values(modules).map((item:any)=>item.default);
export type List =typeof routerList;
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../Layout/index.vue"),
    children:routerList
  },
  
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../views/Login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  
});
export default router;

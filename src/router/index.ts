import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    
    component: () => import("../views/Home/index.vue"),
  
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
  {
        path: "/live",
        name: "live",
        meta: {
          title: "缓存",
          keepAlive: true
        },
        component: () => import("../views/Live/index.vue"),
      },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;

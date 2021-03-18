import { createRouter, createWebHashHistory, RouteRecordRaw,createWebHistory} from "vue-router";
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
    path: "/live",
    name: "直播",
    meta: {
      title: "直播",
      keepAlive: true
    },
    component: () => import("../views/live/index.vue"),
  },
  {
    path: "/add",
    name: "新增",
    meta: {
      title: "新增",
      keepAlive: true
    },
    component: () => import("../views/Add/index.vue"),
  },
  {
    path: "/search",
    name: "新增",
    meta: {
      title: "新增",
      keepAlive: true
    },
    component: () => import("../views/seach/index.vue"),
  },
  {
    path: "/Member",
    name: "会员",
    meta: {
      title: "会员",
      keepAlive: true
    },
    component: () => import("../views/Member/index.vue"),
  },
  {
    path: "/News",
    name: "消息",
    meta: {
      title: "消息",
      keepAlive: true
    },
    component: () => import("../views/News/index.vue"),
  },
  {
    path: "/Main",
    name: "我的",
    meta: {
      title: "我的",
      keepAlive: true
    },
    component: () => import("../views/Main/index.vue"),
  },
  {
    path: "/Play",
    name: "视频",
    meta: {
      title: "视频",
      keepAlive: true
    },
    component: () => import("../views/Play/index.vue"),
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
  history: createWebHistory(),
  routes
});
export default router;

export default  {
  path: "/Main",
  name: "我的",
  meta: {
    title: "我的",
    keepAlive: true,
    show:true,
  },
  component: () => import("@/views/Main/index.vue"),
}
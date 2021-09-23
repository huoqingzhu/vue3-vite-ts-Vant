export default  {
  path: "/News",
  name: "消息",
  meta: {
    title: "消息",
    keepAlive: true,
    show:true
  },
  component: () => import("@/views/News/index.vue"),
}
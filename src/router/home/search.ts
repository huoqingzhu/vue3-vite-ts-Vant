export default   {
  path: "/search",
  name: "搜索",
  meta: {
    title: "搜索",
    keepAlive: true,
    show:true
  },
  component: () => import("@/views/seach/index.vue"),
}
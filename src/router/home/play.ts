export default  {
  path: "/Play",
  name: "视频",
  meta: {
    title: "视频",
    keepAlive: true,
    show:true
  },
  component: () => import("@/views/Play/index.vue"),
}
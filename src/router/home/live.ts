export default    {
  path: "/live",
  name: "Live",
  meta: {
    title: "直播",
    keepAlive: true,
    show:false,
  },
  component: () => import("@/views/live/index.vue"),
}
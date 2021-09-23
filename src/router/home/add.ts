export default    {
  path: "/add",
  name: "新增",
  meta: {
    title: "新增",
    keepAlive: true
  },
  component: () => import("@/views/Add/index.vue"),
}
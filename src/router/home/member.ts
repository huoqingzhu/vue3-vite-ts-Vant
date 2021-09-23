export default  {
  path: "/Member",
  name: "会员",
  meta: {
    title: "会员",
    keepAlive: true,
    show:true
  },
  component: () => import("@/views/Member/index.vue"),
}
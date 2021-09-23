<template>
  <div class="content">
    <router-view ></router-view>
  </div>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="tv-o">视频</van-tabbar-item>
    <van-tabbar-item icon="send-gift-o" badge="5">会员</van-tabbar-item>
    <van-tabbar-item icon="more-o" badge="20">消息</van-tabbar-item>
    <van-tabbar-item icon="user-o" badge="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      active: 0,
    });
    const router = useRouter();
    watch(
      () => state.active,
      (a, b) => {
        switch (a) {
          case 0:
            router.push("/Home");
            break;
          case 1:
            router.push("/Play");
            break;
          case 2:
            router.push("/Member");
            break;
          case 3:
            router.push("/News");
            break;
          case 4:
            router.push("/Main");
            break;
          default:
            break;
        }
      }
    );
    return { ...toRefs(state) };
  },
});
</script>

<style lang="less">

.content {
  width: 100%;
  height: 94%;
  overflow: hidden;
  // background-color: pink;
}
.tabbar {
  width: 100%;
  height: 20%;
}
</style>
<template>
  <h1>登录页</h1>
  vuex:{{ $store.state.num }}
  <div>
    <van-button type="primary" @click="goLogin">跳转到首页</van-button>
  </div>
</template>
<script lang="ts" setup="props">
import { useRouter } from "vue-router";
const router = useRouter();
const goLogin = () => {
  router.push("/");
};
</script>
<template>
  <van-row>
    <van-col span="21">
      <van-search
        @focus="focus"
        v-model="state.value"
        placeholder="请输入搜索关键词"
      />
    </van-col>
    <van-col span="3">
      <div class="Vcenter" @click="$router.push('/')">取消</div>
    </van-col>
  </van-row>
</template>
<script lang="ts" setup="props">
import { reactive } from "@vue/reactivity";
const state = reactive({
  value: "",
});
</script>

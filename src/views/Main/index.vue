<template>
  <div>
    <h1>本地列表</h1>
    <div v-for="(item, index) in listData" :key="index" class="box">
      {{ item.name }}
    </div>
    <button @click="addData">新增数据</button>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
} from "vue";

export default defineComponent({
  setup() {
    const state: { listData: { name: number }[] } = reactive({
      listData: [{ name: 0 }],
    });
    onMounted(() => {
      const data: any = localStorage.getItem("listData");
      if (data) {
        state.listData = JSON.parse(data);
      }
    });
    const addData = () => {
      state.listData.push({ name: state.listData.length });
    };
    onBeforeUnmount(() => {
      localStorage.setItem("listData", JSON.stringify(state.listData));
    });
    return { ...toRefs(state), addData };
  },
});
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 20px;
  background-color: rgb(245, 243, 243);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  font-size: 18px;
}
.box:hover {
  background-color: rgb(68, 219, 144);
}
</style>

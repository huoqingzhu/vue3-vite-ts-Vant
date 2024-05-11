<template>
  <div>

    <div style="height: 677px;" class="flex-h">
      <div>
        1231
      </div>
      <div class="bo"></div>
    </div>
    组件1-{{ label }}
    <input />
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
const props = defineProps(['label'])
onMounted(() => {
  console.log("组件1", "mounted", '我的参数是' + props.label);
});
</script>
<style lang="scss" scoped>
.flex-h {
  display: flex;
  width: 200px;
  // 方向 竖着
  flex-direction: column;
  background: #000;
  border: 1px solid #ccc;


  .bo {
    flex: 1;
    background: pink;
  }


}
</style>
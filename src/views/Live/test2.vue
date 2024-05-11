<template>
  <div>
    组件2
    <input type="number" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log("组件2", "mounted");
});
</script>
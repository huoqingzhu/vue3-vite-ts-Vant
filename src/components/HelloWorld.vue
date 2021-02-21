<template>
  <h1>{{ msg }}</h1>
  <h1>你好</h1>
  <img src="../assets/logo.png" alt="" />
  <div class="test">
    <span>嵌套css</span>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const useScriptSetup = ref(false);
    const useTsPlugin = ref(false);
    return { count, useScriptSetup, useTsPlugin };
  },
});
</script>

<style scoped lang="less">
a {
  color: #42b983;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.test {
  span {
    background-color: pink;
  }
}
</style>

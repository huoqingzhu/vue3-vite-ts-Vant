<template>
  <div>
    <h1>生成二维码</h1>

    <input :value="url" class="code" ref="input" />
    <button class="but" @click="setCode">生成二维码</button>

    <div id="code"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import QRCode from "qrcode2";
export default defineComponent({
  setup() {
    let qrcode: any;
    const url = ref(
      "https://www.apple.com.cn/?afid=p238%7CN2nnhxYV_mtid_18707vxu38484&cid=aos-cn-kwba-brand-bz"
    );
    const input: any = ref(null);
    const setCode = () => {
      console.log(input.value.value);
      const tet = input.value;
      qrcode.clear(); // 清除代码
      qrcode.makeCode(input.value.value); // 生成另外一个二维码
    };
    onMounted(() => {
      qrcode = new QRCode(document.getElementById("code"), {
        width: 150,
        height: 150,
        text: url.value, // 二维码地址
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    });
    return { url, setCode, input };
  },
});
</script>
<style lang="less" scoped>
.code {
  width: 70vw;
  height: 20px;
}
.but {
  height: 20px;
}
</style>

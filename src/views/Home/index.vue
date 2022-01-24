<template>
  <div class="home">
    <div class="center title"> 优宁维商城 </div>

    <div class="box1">
        <van-search
          @focus="focus"
          v-model="state.value"
          shape="round"
          background="red"
          placeholder="请输入搜索关键词、商品名称、货号等"
        />
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>图片1</van-swipe-item>
            <van-swipe-item>图片2</van-swipe-item>
            <van-swipe-item>图片3</van-swipe-item>
            <van-swipe-item>图片4</van-swipe-item>
        </van-swipe>
    </div>
    <van-swipe class="tab" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- <van-tabs v-model:active="state.active">
      <van-tab
        v-for="index in state.TabDara"
        :title="index"
        :key="index"
        color="#0000FF"
      >
      </van-tab>
    </van-tabs> -->
    <!-- <div class="count">
      <div class="Vcenter" style="height: 4vh" v-show="state.show">
        <van-loading type="spinner" color="#1989fa" />
      </div>
      <List
        v-for="item in state.listData"
        :key="item._id"
        :title="item.title"
      ></List>
    </div> -->
  </div>
</template>
<script lang="ts" setup="props">
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import List from "@/components/List/index.vue";
const router = useRouter();
const store = useStore();
const state = reactive({
  value:''

});

//获取数据

// 获取焦点触发
const focus = () => {
  router.push("/search");
};
</script>
<style  lang="scss" scoped>

.home {
  width: 100%;
  height: 100%;
}
.title{
  height: 40px;
  background: red;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.box1{
  background: linear-gradient(
    180deg,#f73b2f 0,#ff7989);
    border-bottom-left-radius: 25px 10px;
    border-bottom-right-radius: 25px 10px;
}
  .my-swipe {
    width: 90%;
    margin: 0 auto;
    border-radius: 6px;
    .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 120px;
    text-align: center;
    // background-color: #39a9ed;
  }
  }
 
</style>

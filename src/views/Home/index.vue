<template>
  <div class="home">
    <van-row>
      <van-col span="3">
        <div class="Vcenter" @click="$router.push('live')">
          <Icon-font type="icon-zhibo" :style="{ fontSize: '30px' }" />
        </div>
      </van-col>
      <van-col span="18">
        <van-search
          @focus="focus"
          v-model="value"
          placeholder="请输入搜索关键词"
        />
      </van-col>
      <van-col span="3">
        <div class="Vcenter" @click="$router.push('add')">
          <Icon-font type="icon-jia" :style="{ fontSize: '30px' }" />
        </div>
      </van-col>
    </van-row>
    <van-tabs v-model:active="state.active">
      <van-tab
        v-for="index in state.TabDara"
        :title="index"
        :key="index"
        color="#0000FF"
      >
      </van-tab>
    </van-tabs>
    <div class="count">
      <div class="Vcenter" style="height: 4vh" v-show="state.show">
        <van-loading type="spinner" color="#1989fa" />
      </div>
      <List
        v-for="item in state.listData"
        :key="item._id"
        :title="item.title"
      ></List>
    </div>
  </div>
</template>
<script lang="ts" setup="props">
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { article } from "@/api/index";
import List from "@/components/List/index.vue";
const router = useRouter();
const store = useStore();
const state = reactive({
  TabDara: [
    "关注",
    "推荐",
    "热榜",
    "圈子",
    "职场",
    "高赞",
    "影视",
    "法律",
    "人文",
    "科学",
  ],
  active: 1,
  listData: [],
  show: false,
});
watch(
  () => state.active,
  (a, b) => {
    state.show = true;
    article().then((res: any) => {
      res.sort(() => (Math.random() > 0.5 ? -1 : 1));
      state.listData = res;
      state.show = false;
    });
  },
  { immediate: true }
);
//获取数据

// 获取焦点触发
const focus = () => {
  router.push("/search");
};
</script>
<style >
.text {
  color: v-bind("state.color");
}
.home {
  width: 100%;
  height: 100%;
}
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  /* background-color: pink; */
}
.addImg {
  width: 30px;
  height: 30px;
}
.count {
  width: 100%;
  height: 90%;
  overflow-y: auto;
  background-color: #fff;
}
</style>

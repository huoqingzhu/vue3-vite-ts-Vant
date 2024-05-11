<template>
  <div>
    <div> 组件级别缓存</div>
    <van-button type="primary" @click="change">切换</van-button>


    <!-- 循环 不可以 做不到缓存 -->
    <!-- <template v-for="item in list" :key="item.label">
        <component :is="item.com" :label="item.label" v-if="item.label === show"></component>
      </template> -->
    <!--component  -->
    <!-- <component :is="list[0].com" v-if="show === '测试1'"></component> -->
    <!-- <component :is="list[1].com" v-else></component> -->

    <!-- 这种可以 -->
    <!-- <keep-alive>
      <component :is="list[0].com" v-if="show === '测试1'" :label="list[0].label"></component>
      <component :is="list[1].com" v-else :label="list[1].label"></component>

    </keep-alive> -->
    <keep-alive>
      <component :is="rename(Test, selected.label)" :label="selected.label"></component>
    </keep-alive>


  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Test from './test1.vue'
// // import Test2 from './test2.vue'
// import Test2 from './test1.vue'

const list = [{ label: 'test1', com: Test }, { label: 'test2', com: Test }]


const change = () => {
  const index = list.findIndex(item => item.label === show.value)
  const nextIndex = index === list.length - 1 ? 0 : index + 1
  show.value = list[nextIndex].label
  selected.value = list[nextIndex]
};
const obj = {
  test1: null,
  test2: null
}
const rename = (value, label) => {
  if (obj[label]) return obj[label]
  obj[label] = { ...value, __name: label }
  console.log(obj[label])
  return obj[label]
}
// 
const show = ref('test1')
const selected = ref(list[0])
</script>
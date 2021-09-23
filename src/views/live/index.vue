
<script lang="ts" setup>
  import {useRoute,useRouter} from "vue-router";
  import { Slider } from 'vant';
  import { Toast } from 'vant';
  import {reactive} from 'vue'
  const route=useRoute()
  const router=useRouter()
  console.log(route.params)

const state=reactive({
  value1:10,
  value2:20,
  value3:30,
  value4:30
})
const onChange=(type:number,value:number,) => {
    if(state.value1+state.value2+state.value3+state.value4>100){
        Toast("天赋点已经不够了")
    }
}
const update=(value:number) => {
  console.log(value)
}
</script>
<template>
  <div>
    <div class="van">
          智力 {{state.value1}}
        <van-slider v-model="state.value1" @change="(e)=>onChange(1,e)" @update:model-value="update" />
    </div>
    <div class="van">
          体质 {{state.value2}}
        <van-slider v-model="state.value2" @change="(e)=>onChange(2,e)" />
    </div>
    <div class="van">
          家庭 {{state.value3}}
        <van-slider v-model="state.value3" @change="(e)=>onChange(3,e)" />
    </div>
    <div class="van">
          相貌 {{state.value4}}
        <van-slider v-model="state.value4" @change="(e)=>onChange(4,e)" />
    </div>
  </div>
  
</template>
<style lang="less" scoped>
.van{
  margin-top: 20px;
  height:80px;
}
</style>
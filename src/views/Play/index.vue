<template>
  <div>
      <h1>{{state.name}}</h1>
      <div v-for="item in state.listData">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {reactive} from "vue"
const state=reactive({
  name:'视频',
  listData:[{id:1,name:'vue'},{id:1,name:'react'}]
})
const data={...state}
console.log(data)

</script>
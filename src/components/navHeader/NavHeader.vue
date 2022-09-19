<template>
  <div>
    <input placeholder="清输入任务名称!!" v-model="value"
    @keydown.enter="enter">
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'navHeader',
  setup () {
    let value = ref('')
    //按回车确认
    const enter = ()=>{
       console.log(value.value)
    }
    return {
      value,
      enter
    }
  }
})
</script>

<style scoped>
  input{
    margin-bottom: 10px;
  }
</style>

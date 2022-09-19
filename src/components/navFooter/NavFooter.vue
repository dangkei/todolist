<template>
  <div class="container">
    已完成{{isComplete}} / 全部{{all}}
  </div>
  <div v-if="isComplete>0" class="btn">
    <button @click="clearALl">清除已完成</button></div>
</template>

<script>
/* eslint-disable */
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'navFooter',
    setup () {
      let isComplete = ref(1)
      let all = ref(4)
      const clearALl = ()=>{
        console.log("clearall") 
      }
      return {
        isComplete,
        all,
        clearALl
      }
    }
  })
</script>

<style scoped lang="scss">
  .container{
    display: flex;
    align-items: center;
    btn{

    }
  }
</style>

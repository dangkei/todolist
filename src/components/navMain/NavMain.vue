<template>
  <div v-for="(item,index) in list" :key="index">
    <div>
      <input type="checkbox" v-model="item.complete">
      {{item.title}}
      <button>删除</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import { defineComponent,ref } from 'vue'

  export default defineComponent({
    name: 'navMain',
    setup () {
      let list = ref([
        {
          title: '吃饭',
          complete: false
        },
        {
          title: '睡觉',
          complete: false
        },
        {
          title: '学习',
          complete: false
        },
        {
          title: '练功',
          complete: false
        },
      ])
      return {
        list
      }
    }
  })
</script>

<style scoped lang="scss">

</style>

<template>
  <div>
    <input placeholder="清输入任务名称!!
" v-model="value">
  </div>
</template>

<script>
/* eslint-disable */
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'navHeader',
    setup () {
      let value = ref('')
      return {
        value
      }
    }
  })
</script>

<style scoped>

</style>

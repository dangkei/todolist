<template>
  <div>
    已完成{{isComplete}}/全部{{all}}
  </div>
  <div v-if="isComplete>0">清除已完成</div>
</template>

<script>
/* eslint-disable */
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'navFooter',
    setup () {
      let isComplete = ref(1)
      let all = ref(2)
      return {
        isComplete,
        all
      }
    }
  })
</script>

<style scoped lang="scss">

</style>

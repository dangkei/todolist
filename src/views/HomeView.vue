<template>
  <div>
    <navHeader></navHeader>
    <navMain></navMain>
    <navFooter></navFooter>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
  </div>
</template>

<script>
/* eslint-disable */
  import navHeader from '@/components/navHeader/NavHeader'
  import navMain from '@/components/navMain/NavMain'
  import navFooter from '@/components/navFooter/NavFooter'
  import HelloWorld from '@/components/HelloWorld'

  import { defineComponent, ref, reactive, toRefs } from 'vue'

  export default defineComponent({
    name: 'HomeView',
    components: {
      navHeader,
      navMain,
      navFooter,
      HelloWorld
    },
    setup (props, ctx) {
      /*const number = ref(1000)
      const name = ref('dangkei')
      const arr = ref(['a', 'b', 'c', 'd', 'e'])
      const obj = ref({
        age: 20
      })*/
      let data = reactive({
        name: 'jack',
        number: 20,
        obj: {
          price: 20
        },
        arr: ['a', 'b', 'c']
      })
      return {
        /*number,
        name,
        arr,
        obj*/
        ...toRefs(data)
      }
    }
  })
</script>

<style scoped>
  * {
    margin-top: 100px;
    vertical-align: center;
    text-align: center;
  }
</style>

<template>
  <div main>
    <navHeader></navHeader>
    <navMain></navMain>
    <navFooter></navFooter>
    <div @click="clickNum1">
      {{num1}}
    </div>
    <div @click="clickNum">
      {{number}}
    </div>
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

      let num1 = ref(20);
      let data = reactive({
        name: 'jack',
        number: 20,
        obj: {
          price: 20
        },
        arr: ['a', 'b', 'c']
      })
      let clickNum1 = ()=>{
        console.log("点击了Num1 = "+num1.value);
      }
      let clickNum = ()=>{
        console.log("点击了number = "+ data.number);
      }
      return {
        /*number,
        name,
        arr,
        obj*/
        num1,
        clickNum,
        clickNum1,
        ...toRefs(data)
      }
    }
  })
</script>

<style scoped>
  .main {
    margin-top: 100px;
    vertical-align: center;
    text-align: center;
  }
</style>

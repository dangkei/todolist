<template>
  <div v-for="(item,index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complete">
      {{item.title}}
      <button class="del" @click="del(item,index)">删除</button>
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
        },{
          title: '敲代码',
          complete: false
        },
      ])
      let del = (item,index)=>{
          console.log(item);
          console.log(index)
      }
      return {
        list,
        del
      }
    }
  })
</script>

<style scoped lang="scss">
  .item{
    height: 35px;
    line-height: 35px;
    position: relative;
    width: 260px;
    cursor: pointer;
    z-index: 99;
    button{
      position: absolute;
      right: 20px;
      top:6px;
      display: none;
    }
    &:hover{
      background: #42b983;
      button{
        display: block;
      }
    }
  }
</style>

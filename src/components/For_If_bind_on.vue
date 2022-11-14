<template>
  <div id="for">
    <ul>
      <li v-for="book in bookList" v-if="book==='b'">{{book}}</li>
    </ul>
    <br>
    <span v-bind:style="'color:'+spanStyle" v-on:click="spanStyleChange(spanStyle)">这是一段文字</span>
    <br>
    <input type="text" v-model="inputString" v-on:keyup="inputStringChange(inputString)">
    <br>
    <span v-bind:style="'color:'+inputStringStyle">{{inputString}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bookList:["a","b","c"],
      spanStyle:"red",
      inputString:"",
      inputStringStyle:""
    }
  },
  methods:{
    spanStyleChange:function (oldStyle){
      if (oldStyle==="red"){
        this.spanStyle='green'
      }else {
        this.spanStyle='red'
      }
    },
    /**
     * 判断字符内是否含有red 有的话样式变成green
     * @param inputString
     */
    inputStringChange:function (inputString){
      if (inputString.includes("red")){
        this.inputStringStyle="green"
      }else {
        this.inputStringStyle=""
      }
    }
  }
}
</script>

<style scoped>

</style>

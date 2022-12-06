<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "BookList",
  data(){
    return{

    }
  },
  methods:{
    getBookList(){
      axios.get("http://127.0.0.1:8081/bookInfo/getBookInfoList").then(function (response){
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>

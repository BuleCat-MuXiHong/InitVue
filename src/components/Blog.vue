<template>
  <div >
    <div>
      <p> 标题： {{ blog.title }}  </p>
      <p> 发布于： {{blog.created_at }}</p>
      <div>
        {{ blog.body }}
      </div>
    </div>
  </div>
</template>
<script>
const api = 'http://siwei.me/interface/blogs/show?id=';
export default {
  data () {
    return {
      blog: {}
    }
  },
  mounted() {
    this.$http.get("http://siwei.me/interface/blogs/show?id=1244").then((response) => {
      console.log(123123)
      this.blog = response.body.result

    }, (response) => {
      console.error(response)
    });
  }
}
</script>
<style>
</style>

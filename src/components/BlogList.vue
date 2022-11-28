<template>
  <div>
    aaaaa
    <!--  <tr v-for="blog in blogs">-->
    <td @click='show_blog(blog.id)'>{{ blog.title }}</td>
    <!--  </tr>-->
  </div>
</template>

<script>
export default {
  data() {
    return{
      blog: {
        id: "1244",
        title: "asdasda"
      }
    }
  },
  methods: {
    show_blog: function (blog_id) {
      this.$router.push({name: 'Blog', query: {id: blog_id}})
    }
  }
}
</script>

<style scoped>

</style>

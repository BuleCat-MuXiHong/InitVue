<template>
  <div class="index" >
    <el-container>
      <el-header class="homeHeader">
        <div class="nav-left">giao-giao</div>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
        >
          <el-menu-item  style="width: 11%;"  v-for="bookType in bookTypes" v-bind:key="bookType.id" :index="bookType.id.toString()">
            {{ bookType.book_type }}
          </el-menu-item>

          <el-menu-item style="width: 11%;"  class="el-menu-item" index="top">排行榜</el-menu-item>
        </el-menu>
        <div class="nav-right">giao~</div>
      </el-header>
            <el-main>
              <book-info/>
            </el-main>
      <!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </div>
</template>

<script>
import BookInfo from "@/components/BookInfo";
export default {
  name: "bookTag",
  components: {BookInfo},
  data() {
    return {
      bookTypes: [],
      activeIndex: "1",

    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.$http.get("/bookType/getBookTypeList").then((response) => {
      this.bookTypes = response.data.result
    })
  }
}
</script>

<style scoped>
.index{
  background-image: url("../static/img/Background_with_line_wave_pattern_5.jpg");
}
.homeHeader {
  width: 100%;
  background-color: #545c64;
}
.homeHeader .el-menu-demo {
  width: 50%;
  height: 99%;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
}
.homeHeader .nav-left {
  width: 20%;
  height: 60px;
  font-size: 30px;
  color: #fff;
  float: left;
  line-height: 60px;
  display: inline;
  text-align: center;
}

.homeHeader .nav-right {
  width: 20%;
  font-size: 30px;
  color: #fff;
  display: inline;
  float: right;
  text-align: center;
  line-height: 60px;
}
</style>

<template>
  <div>
    <!--    <li v-for="bookInfo in bookInfos">{{bookinfo}}</li>-->
    <div class="bookInfoCardList">
      <div class="box-card" v-for="bookInfo in bookInfos">
        <div class="bookInfoImg">
          <img :src="bookInfo.book_img_url" alt="" >
        </div>
        <div class="bookInfoContent">
          <h2>{{ bookInfo.book_name }}</h2>
          <p>{{ bookInfo.book_title }}</p>
          <p>{{ bookInfo.book_url }}</p>
        </div>
      </div>
    </div>


    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total=total>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookInfo",
  data() {
    return {
      bookType: 1,
      pageNo: 1,
      pageSize: 10,
      currentPage: 3,
      bookInfos: [],
      total:0,
      search: {
        pageNum:1,
        pageSize:10,
        name: '',
        organizationId: '',
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.search.pageSize=val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.search.pageNum=val;
      this.getBookInfoList()
    },
    getBookInfoList(){
      this.$http.get("/bookInfo/getBookInfoList", {params: {bookType: 1, pageNo: this.search.pageNum, pageSize: this.search.pageSize}}).then((response) => {
        this.bookInfos = response.data.result.list
        this.total=response.data.result.total;
        console.log(response.data.result)
        console.log(this.total)
      })
    }
  },
  created() {
    this.$http.get("/bookInfo/getBookInfoList", {params: {bookType: 1, pageNo: 1, pageSize: 10}}).then((response) => {
      this.bookInfos = response.data.result.list
      this.total=response.data.result.total;
      console.log(response.data.result)
      console.log(this.total)
    })
  }
}
</script>

<style scoped>
.bookInfoCardList {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  /*background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);*/
  /*display: table;*/
}

.box-card {
  display: flex;
  justify-content: center;
  background: aqua;
  margin: 15px;
  width: 40%;
  height: 200px;
  font-size: 10px;
}

.block {
  margin: 0 auto;
}

.bookInfoImg {
  width: 30%;
  height: 100%;
  background: red;
  position: relative;
  left: 0;
}

.bookInfoImg img {
  width: 100%;
  height: 100%;

}

.bookInfoContent {
  background: antiquewhite;
  width: 85%;
  margin-left: 15px;
  height: 100%;
  /*float: right;*/
}
.block{
  display: flex;
  justify-content: center;

}
</style>

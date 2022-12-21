<template>
  <div>
    <!--    <li v-for="bookInfo in bookInfos">{{bookinfo}}</li>-->
    <div class="bookInfoCardList">
      <a class="box-card" v-for="bookInfo in bookInfos" :href="bookInfo.book_url">
        <div class="bookInfoImg">
          <img :src="bookInfo.book_img_url" :onerror='defaultImg'>
        </div>
        <div class="bookInfoContent">
          <h2 style="margin: 5px 0 0 0;padding: 0">{{ bookInfo.book_name }}</h2>
          <p style="margin: 5px 0 0 0; padding: 0">作者：{{ bookInfo.book_author }}</p>
          <p style="height: 70%; margin: 5px 0 0 0; padding: 0;">{{ bookInfo.book_title|ellipsis }}</p>
          <!--          <p>{{ bookInfo.book_url }}</p>-->
        </div>
      </a>
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
import * as bookInfoHttp from '@/api/bookInfo'

export default {
  name: "BookInfo",
  data() {
    return {
      bookType: null,
      pageNo: 1,
      pageSize: 10,
      currentPage: 3,
      bookInfos: [],
      total: 0,
      search: {
        pageNum: 1,
        pageSize: 10,
        name: '',
        organizationId: '',
      },
      defaultImg: 'this.src="' + require('../static/img/bookImgError.png') + '"'
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.search.pageSize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.search.pageNum = val;
      this.getBookInfoList()
    },
    getBookInfoList() {
      this.$http.get("/bookInfo/getBookInfoList", {
        params: {
          bookType: 1,
          pageNo: this.search.pageNum,
          pageSize: this.search.pageSize
        }
      }).then((response) => {
        this.bookInfos = response.data.result.list
        this.total = response.data.result.total;
        console.log(response.data.result)
        console.log(this.total)
      })
    }
  },
  created() {
    bookInfoHttp.getBookInfoList({
      bookType: 1,
      pageNo: 1,
      pageSize: 10
    }).then((response) => {
      this.bookInfos = response.data.result.list
      this.total = response.data.result.total;
      console.log(response.data.result)
      console.log(this.total)
    })
  },
  filters: {
    ellipsis(value) {
      if (!value) return '';
      if (value.length > 300) {
        return value.slice(0, 300) + '...'
      }
      return value
    }
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
  text-decoration: none;
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
  /*background: red;*/
  position: relative;
  left: 0;
}

.bookInfoImg img {
  width: 100%;
  height: 100%;

}

.bookInfoContent {
  font-size: 12px;
  background: antiquewhite;
  width: 85%;
  padding-left: 15px;
  height: 100%;
  /*float: right;*/
  text-indent: 24px;
}

.block {
  display: flex;
  justify-content: center;

}


</style>

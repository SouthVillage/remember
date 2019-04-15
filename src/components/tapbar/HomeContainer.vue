<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="items in imagsList" :key="items.id">
        <img :src="items.img">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt>
          <div class="mui-media-body">留意我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>



<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      imagsList: []
    };
  },
  created() {
    this.getImages();
  },
  methods: {
    getImages() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          console.log(result.body);
          if (result.body.status === 0) {
            this.imagsList = result.body.message;
          } else {
            Toast("加载失败");
          }
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: cyan;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: red;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-table-view.mui-grid-view.mui-grid-9 {
  background: #fff;
  img {
    width: 45px;
    height: 45px;
  }
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
  border: 0;
  .mui-media-body{
    font-size: 12px;
  }
}
</style>

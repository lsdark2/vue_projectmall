<template>
  <div id="details">
    <detail-bar></detail-bar>
    <detail-swiper :imgs="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>

  </div>
</template>

<script>
  import {getDetail, GoodsInfo} from "../../network/detail";
  import DetailBar from "./childComponents/DetailBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from './childComponents/DetailBaseInfo'

  export default {
    name: "GoodsDetail",
    components: {
      DetailBar, DetailSwiper, DetailBaseInfo
    },
    data() {
      return {
        id: this.$route.params.id,
        topImages: [],
        goods: {}
      }
    },
    methods: {},
    mounted() {
      getDetail(this.id).then(res => {
        let datas = res.result
        /*获取顶部轮播数据*/
        this.topImages = datas.itemInfo.topImages
        /*获取商品详情*/
        this.goods = new GoodsInfo(datas.itemInfo, datas.columns, datas.shopInfo.services)
      })
    },
    activated() {
      console.log("详情被激活了")
    },
    deactivated() {
      console.log("详情离开了");
    },
    created() {
      console.log('详情创建了');
    },
    destroyed() {
      console.log('详情销毁了');
    }

  }
</script>

<style scoped>

</style>

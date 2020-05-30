<template>
  <div id="details">
    <detail-bar></detail-bar>
    <!--    <home-swiper :banners="topImages"></home-swiper>-->
    <detail-swiper :imgs="topImages"></detail-swiper>

    <!-- <div ><p v-for="item in result.columns" v-text="item"></p></div>
     <div>
       <p v-text="result.detailInfo.desc"></p>
     <div v-for="item in  result.detailInfo.detailImage">
       <p v-text="item.anchor"></p>
       <p v-text="item.key"></p>
       <p v-text="item.key"></p>
       <div >
         <img v-for='img in item.list' :src="img" style="width: 95% ;height: auto">
       </div>
     </div>
     </div>-->
  </div>
</template>

<script>
  import {getDetail} from "../../network/detail";
  import DetailBar from "./childComponents/DetailBar";
  import DetailSwiper from "./childComponents/DetailSwiper";

  export default {
    name: "GoodsDetail",
    components: {
      DetailBar, DetailSwiper
    },
    data() {
      return {
        id: this.$route.params.id,
        topImages: [],
        result: {
          columns: [],
          detailInfo: {
            desc: '',
            detailImage: [
              {
                anchor: "model_img",
                desc: "",
                key: "",
                list: []
              }
            ]
          }
        }
      }
    },
    methods: {},
    mounted() {
      getDetail(this.id).then(res => {
        /*获取顶部轮播数据*/
        this.topImages = res.result.itemInfo.topImages
        this.result = res.result;
        console.log(res)
        console.log('=====')
        // console.log(this.topImages)
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

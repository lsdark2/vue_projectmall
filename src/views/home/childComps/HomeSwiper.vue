<template>
  <div>
    <swiper>
      <!--这里轮播的是banners的数据这是从其他地方传过来的-->
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
            return[]
        }
      }
    },
    components: {
      Swiper, SwiperItem
    },
  }
</script>

<style scoped>

</style>

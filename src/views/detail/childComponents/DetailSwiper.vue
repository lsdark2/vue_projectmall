<template>
  <div class="detail-swiper">
    <swiper class="item-img">
      <swiper-item v-for="item in imgs">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    props: {
      imgs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper, SwiperItem
    }
  }
</script>

<style scoped>
  /*.detail-swiper {*/
  /*  width: 100vh;*/
  /*  height: 15%;*/
  /*}*/
  .item-img {
    overflow: hidden;
    height: 300px;
  }

</style>

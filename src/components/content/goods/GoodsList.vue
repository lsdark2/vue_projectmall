<template>
<div class="goods">
    <!--<p v-for="(item,index) in goodsList" :key="index" v-text="item"></p>-->
  <goods-list-item v-for="(item,index) in goodsList" :key="index" :goods-item="item"></goods-list-item>

</div>
</template>

<script>
  /*导入GoodsListItem*/
  import  GoodsListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
      props: {
        goodsList: {
          type: Array,
          default() {
            return []
          }
        }
      },
      components: {
        GoodsListItem
      },
      activated() {
        console.log("进入商品页了");
      },
      deactivated() {
        console.log("离开商品列表页");
      }
    }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>

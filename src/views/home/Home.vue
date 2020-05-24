<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <p slot="left">返回</p>
      <p slot="center">购物商场</p>
      <p slot="right">没有用</p>
    </nav-bar>

    <!--  这里轮播的是banners的数据-->
    <home-swiper :banners="banners"></home-swiper>
    <!--这里是轮播下面的组件-->
    <recommend-view :recommends="recommends"></recommend-view>
    <!--这是本周流行热卖-->
    <feature-view></feature-view>
    <!--这个是流行，新款，精选标题-->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tbs"></tab-control>
    <goods-list :goodsList="showGoodsList"></goods-list>
  </div>
</template>

<script>
  /*导航栏*/
  import NavBar from 'components/common/navbar/NavBar'
  /*轮播组件*/
  import HomeSwiper from './childComps/HomeSwiper'
  /*这是本周流行热卖*/
  import RecommendView from './childComps/RecommendView'
  /*展示每周精选*/
  import FeatureView from './childComps/FeatureView'
  /*主页分类滚动*/
  import TabControl from 'components/content/tabControl/TabControl'
  /*商品展示*/
  import  GoodsList from 'components/content/goods/GoodsList'
  import {getHomeData, getHomeGoods} from 'network/home'


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    /*在创建组件成功的时候，就需要马上初始化数据，所以应该使用生命周期的create*/
    created() {
      //1.请求多个数据

     this.getHomeDatas();
      //请求个性数据
      this.getHomeGoodsDatas('pop');
      this.getHomeGoodsDatas('new');
      this.getHomeGoodsDatas('sell');

    },
    /*计算属性*/
    computed:{
      showGoodsList(){
        return  this.goods[this.currentType].list
      }
    },
    methods:{
      getHomeDatas(){
        getHomeData().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }).catch(err => {
          console.log(err);
        })
      },

      //请求个性数据
      getHomeGoodsDatas(type){
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1;
        }).catch(err=>{
          console.log(err);
        })
      },
      tbs(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      }

    }

  }

</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 10;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }


</style>

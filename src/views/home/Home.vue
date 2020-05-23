<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <p slot="left">返回</p>
      <p slot="center">购物商场</p>
      <p slot="right">没有用</p>
    </nav-bar>


  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeData} from 'network/home'
  export default {
    name: "Home",
    components: {
      NavBar
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
      getHomeData().then(res => {
        console.log(res);
        this.banners = res.data.banner;
        this.recommends = res.data.recommend;
      }).catch(err => {
        console.log(err);
      })
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
    z-index: 9;
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

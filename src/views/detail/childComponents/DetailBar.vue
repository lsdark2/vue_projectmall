<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" class="back">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             class="title-item"
             @click="toChange(index)"
             :class="{ theme:index === currentIndex}">{{item}}
        </div>
      </div>
    </nav-bar>

  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";

  export default {
    name: "DetailBar",
    data() {
      return {
        titles: ['商品', '评论', '参数', '推荐'],
        currentIndex: 0,
      }
    },
    components: {
      NavBar
    },
    methods: {
      toChange(index) {

        this.currentIndex = index;

      },
      backClick() {
        this.$router.back()
      }
    },
    created() {
      console.log('bar被创建了');
    },
    activated() {
      console.log("bar激活了");
    },
    deactivated() {
      console.log('bar离开了');
    },
    destroyed() {
      console.log('bar销毁了');
    }

  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1;

  }

  .theme {
    color: #ff5777;
  }

  .back {
    margin-top: 12px;
  }
</style>

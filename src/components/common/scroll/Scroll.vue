<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      this.$refs.wrapper
    }
  }
</script>

<style scoped>

</style>

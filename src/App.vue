<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  }
};
</script>

<style lang="scss">
@import "./styles/reset.scss";   /* 引入重置样式 */
@import "./styles/common.scss";  /* 引入全局变量与函数 */
</style>

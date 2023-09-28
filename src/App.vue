<template>
  <div class="container">
    <!-- 头部 -->
    <Header></Header>
    <!-- 头部 -->
    <!-- 路由出口 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 路由出口 -->
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 底部 -->
  </div>
</template>

<script setup lang="ts">
import Header from "./components/header/index.vue";
import Footer from "./components/footer/index.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    width: 1200px;
    min-height: 700px;
    margin-top: 70px;
    margin-bottom: 70px;
  }
}
</style>

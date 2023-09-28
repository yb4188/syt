<template>
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="banner" src="../../../../assets/images/web-banner-1.png" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.text-center {
  width: 1200px;
}
</style>

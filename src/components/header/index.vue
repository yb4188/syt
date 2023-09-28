<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png" />
        <p>丁真医选 预约挂号一条龙服务</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p>登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba($color: #bbb, $alpha: 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: white;
  .content {
    height: 100%;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      color: #bbb;
      font-size: 14px;
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>

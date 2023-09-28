<template>
  <div class="footer">
    <div class="container">
      <p class="left">京ICP备 13018369号 电话挂号010-56253825</p>
      <ul class="right">
        <li>联系我们</li>
        <li>合作伙伴</li>
        <li>用户协议</li>
        <li>隐私协议</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  .container {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-size: 14px;
    .right {
      display: flex;
      li{
        margin-right: 8px;
      }
    }
    .right:last-child{
        margin-right: 0;
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="search">
      <el-form inline>
        <el-form-item>
          <el-autocomplete
            placeholder="请输入关键字"
            placement="bottom-start"
            clearable
            v-model="keyword"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

let keyword = ref("");
</script>

<style scoped>
.container {
  margin-top: 20px;
  width: 1200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .search {
    ::v-deep(.el-input) {
      width: 600px;
      height: 30px;
    }
  }
}

::v-deep(.el-form-item) {
  margin-right: 10px;
}
</style>

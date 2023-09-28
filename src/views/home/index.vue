<template>
  <div class="container">
    <!-- 轮播图 -->
    <HospitalSwiper></HospitalSwiper>
    <!-- 轮播图 -->
    <!-- 搜索 -->
    <Search></Search>
    <!-- 搜索 -->
    <!-- 两栏布局 -->
    <el-row class="row">
      <!-- 左 -->
      <el-col :span="20">
        <p class="hospital">医院</p>
        <div class="level_content">
          <p>等级：</p>
          <ul class="level">
            <li :class="{ active: current === '0' }" @click="current = '0'">全部</li>
            <li
              v-for="item in hospitalLevel"
              :key="item.value"
              :class="item.value === current ? 'active' : ''"
              @click="changeIndex(item.value, 'level')"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="area_content">
          <p style="white-space: nowrap">地区：</p>
          <ul class="area">
            <li
              v-for="item in 25"
              :key="item"
              :class="item === current1 ? 'active' : ''"
              @click="changeIndex(item)"
            >
              大兴{{ item }}
            </li>
          </ul>
        </div>
        <!-- 卡片 -->
        <div class="card_container">
          <Card
            v-for="item in hospitalArr"
            :key="item.id"
            :hospital="item"
          ></Card>
        </div>
        <!-- 卡片 -->
        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 15, 20]"
          background
          layout="sizes, prev,,pager,next,->, jumper,total"
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
        <!-- 分页器 -->
      </el-col>
      <!-- 左 -->
      <!-- 右 -->
      <el-col :span="4">2</el-col>
      <!-- 右 -->
    </el-row>
    <!-- 两栏布局 -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ResponseRes, ResData } from "@/api/home/type";
import { reqHospitalList, reqHospitalLevel } from "@/api/home/index";
import HospitalSwiper from "./components/hospital-swiper/index.vue";
import Search from "./components/search/index.vue";
import Card from "./components/hospital/index.vue";

//定义选中状态
let current = ref<string>("0");
let current1 = ref<number>(1);
//分页
let currentPage = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(10);
const currentChange = () => {
  getHospitalList();
};
const sizeChange = () => {
  currentPage.value = 1;
  getHospitalList();
};
//医院列表
let hospitalArr = ref<ResData>([]);
//医院等级
let hospitalLevel = ref([]);

//实例挂载
onMounted(() => {
  getHospitalList();
  getHospitalLevel();
});

//选中事件
const changeIndex = (index: number, key?: string) => {
  if (key === "level") {
    current.value = index;
  } else {
    current1.value = index;
  }
};

//主页的医院列表
const getHospitalList = async () => {
  //@ts-ignore
  let res: ResponseRes = await reqHospitalList(
    currentPage.value,
    pageSize.value
  );
  if (res.code === 200) {
    total.value = res.data.totalElements;
    hospitalArr.value = res.data.content;
  }
};

//主页医院等级
const getHospitalLevel = async () => {
  let res = await reqHospitalLevel("HosType");
  console.log(res);
  if (res.code === 200) {
    hospitalLevel.value = res.data;
  }
};
</script>

<style scoped lang="scss">
.container {
  .row {
    width: 1200px;
    margin-top: 25px;
    .hospital {
      font-weight: 900;
      color: #7f7f7f;
    }
    .level_content {
      display: flex;
      color: #7f7f7f;
      .level {
        display: flex;
        li {
          margin-left: 10px;
        }
      }
    }
    .area_content {
      display: flex;
      margin-top: 10px;
      color: #7f7f7f;
      .area {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-left: 10px;
          margin-top: 5px;
        }
      }
    }
  }
  .card_container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .active {
    color: #55a6fe;
  }
}
</style>

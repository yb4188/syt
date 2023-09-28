import { createApp } from "vue";
//引入全局样式 清除元素的默认样式
import "./styles/reset.scss";
import App from "./App.vue";
//引入饿了么样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//引入路由
import router from "@/router/index";
//国际化
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");

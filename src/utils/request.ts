/**
 * 二次封装axios
 * 作用 添加拦截器
 * 在请求拦截器中 携带 公共参数 例如 token
 * 在响应拦截器中 简化响应数据
 * 可以处理响应错误
 */
import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    
    switch (error.response?.status) {
      case 404:
        ElMessage({
          type: "error",
          message: "请求失败路径出现问题",
        });
        break;
      case 500 | 501 | 502 | 503 | 504 | 505:
        ElMessage({
          type: "error",
          message: "服务器挂了",
        });
        break;
      case 401:
        ElMessage({
          type: "error",
          message: "参数有误",
        });
        break;
    }
    Promise.reject(new Error(error.message));
  }
);

export default request;

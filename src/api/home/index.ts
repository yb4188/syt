/**
 * 主页接口
 */
import request from "@/utils/request";
import { ResponseRes } from "./type";
//枚举接口地址
enum API {
  //获取分页列表
  HOSPITAL_URL = "/hosp/hospital/",
  //获取医院等级
  LEVEL_URL = "/cmn/dict/findByDictCode/",
}

//获取分页列表
export const reqHospitalList = (page: number, limit: number) =>
  request.get<ResponseRes>(API.HOSPITAL_URL + `${page}/${limit}`);

//获取医院等级
export const reqHospitalLevel = (dictCode: string) =>
  request.get<any>(API.LEVEL_URL + dictCode);

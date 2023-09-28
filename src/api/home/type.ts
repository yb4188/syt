/**
 * 定义接口类型
 */

//定义接口的通用类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

//定义数组类型
export interface ContentData {
  address: string;
  bookingRule: object;
  cityCode: string;
  createTime: string;
  districtCode: string;
  hoscode: string;
  hosname: string;
  hostype: string;
  id: string;
  intro: string;
  isDeleted: number;
  logoData: string;
  param: { hostypeString: string; fullAddress: string };
  provinceCode: string;
  route: string;
  status: number;
  updateTime: string;
}

//定义Data
export type ResData = ContentData[];

//定义返回值类型
export interface ResponseRes {
  data: {
    content: ResData;
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
      sort: object;
      pageNumber: number;
      pageSize: number;
      offset: number;
      unpaged: boolean;
    };
    size: number;
    sort: { sorted: boolean; unsorted: boolean; empty: boolean };
    totalElements: number;
    totalPages: number;
  };
  code: number;
  message: string;
  ok: boolean;
}

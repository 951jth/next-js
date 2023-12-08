import { axiosInstance as axios } from "@service/axios";
import qs from "qs";

export default {
  //어드민 목록 조회
  getAdminList: () => {
    const options = {
      method: "GET",
      url: "admin/member",
    };
    return axios(options);
  },
  //어드민 등록
  postAdmin: (data) => {
    const options = {
      method: "POST",
      url: "admin/member",
      data: JSON.stringify(data),
    };
    return axios(options);
  },
  //어드민 상세 조회
  getAdminById: (id) => {
    const options = {
      method: "GET",
      url: `admin/member/${id}`,
    };
    return axios(options);
  },
  //어드민 로그인
  loginAdmin: (params) => {
    const options = {
      method: "GET",
      url: `admin/member/login?${qs.stringify(params)}`,
    };
    return axios(options);
  },
};

import { axiosInstance as axios } from "@service/axios";
import qs from "qs";

export default {
  //문의 등록
  postProductionInquiry: (data) => {
    const options = {
      method: "POST",
      url: "inquiry/product",
      data: JSON.stringify(data),
    };
    return axios(options);
  },
  //문의 조회 ID
  getProductionInquiryById: (id) => {
    const options = {
      method: "GET",
      url: `inquiry/product/${id}`,
    };
    return axios(options);
  },
};

import { axiosInstance as axios } from "@service/axios";
import qs from "qs";

export default {
  //파일 업로드 (프로젝트 root 폴더에 업로드하는것임)
  uploadFile: (file) => {
    const formData = new FormData();
    formData.append("file", file.originFileObj);
    const requestOptions = {
      method: "POST",
      url: `/file/upload`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };
    return axios(requestOptions);
  },
};

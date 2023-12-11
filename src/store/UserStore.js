import admin from "@/service/admin";

const { create } = require("zustand");

const initData = {
  userInfo: null,
};

export const useUserStore = create((set, get) => ({
  ...initData,
  login: (ID, PW) => {
    const { setUserInfo } = useUserStore.getState();
    admin.loginAdmin({ ID, PW }).then((res) => {
      setUserInfo(res?.data?.data);
    });
  },
  setUserInfo: (userData) => {
    set({ userInfo: userData });
  },
}));

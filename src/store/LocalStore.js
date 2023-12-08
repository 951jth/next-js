import { create } from "zustand";
import { persist } from "zustand/middleware";

const initData = {
  userToken: null,
};

export const useLocalStore = create(
  persist(
    (set, get) => {
      return {
        ...initData,
        setUserToken: (data) => set({ userToken: data }),
      };
    },
    {
      name: "localStore",
    }
  )
);

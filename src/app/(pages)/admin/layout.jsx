"use client";
import { useEffect } from "react";
import styles from "./layout.module.css";
import { useLocalStore } from "@/store/LocalStore";
import { useUserStore } from "@/store/UserStore";

export default function AdminLayout({ children }) {
  // const { userToken } = useLocalStore((state) => state);
  // const { userInfo, login } = useUserStore((state) => state);
  // useEffect(() => {
  //   if (userToken) {
  //     const { ID, PW } = userToken;
  //     login(ID, PW);
  //   }
  // }, [userToken]);

  return (
    <div className={`${styles.container} rowCenterCenter`}>{children}</div>
  );
}

"use client";
import { menus } from "@/routes/routes";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <Menu
        items={menus}
        mode="horizontal"
        onSelect={(key) => {
          const path = key?.item?.props?.path;
          path && router.push(path);
        }}
      ></Menu>
    </div>
  );
}

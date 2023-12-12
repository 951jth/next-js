"use client";
import { Select } from "antd";
import styles from "./DelphicomSelect.module.css";
import arrowUp from "@icons/Icon_arrow_1408.png";
import arrowDown from "@icons/icon_arrow_down.svg";
import Image from "next/image";
import { useState } from "react";

export default function DelphicomSelect({ placeholder, ...others }) {
  const [open, setOpen] = useState();
  return (
    <>
      <Select
        {...others}
        placeholder={
          <span style={{ color: "#333333", fontSize: 14 }}>{placeholder}</span>
        }
        open={open}
        className={styles.selectWrap}
        suffixIcon={<Image src={open ? arrowUp : arrowDown} alt="arrow" />}
        onDropdownVisibleChange={(e) => setOpen(e)}
      ></Select>
    </>
  );
}

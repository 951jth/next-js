"use client";
import { Checkbox, Input } from "antd";
import checkCircle from "@icons/checkCircle.png";
import Image from "next/image";
import dayjs from "dayjs";
import { memo, useEffect, useState } from "react";
import _ from "lodash";
import styles from "./RoundCheckbox.module.css";

export default memo(function RoundCheckbox({
  value,
  setValue,
  form,
  formName,
  size = 18,
  style,
  className,
}) {
  const [checked, setChecked] = useState(false);
  const formChecked = _.debounce(() => {
    setChecked((old) => {
      if (form && formName) {
        form.setFieldValues({ [formName]: !old });
      }
      if (setValue) setValue(!old);
      return !old;
    });
  }, 50);

  useEffect(() => {
    setChecked(value);
  }, []);

  return (
    <>
      <span className="checkboxWrap" onClick={formChecked} style={style}>
        <Image
          src={checkCircle}
          width={size}
          height={size}
          alt="checkbox"
          className={`${styles.checkImage} ${checked ? styles.active : ""}`}
          style={{ width: size, height: size }}
          //   style={{ display: checked ? "inline-block" : "none" }}
          //   style={{ visibility: checked ? "visible" : "hidden" }}
        />
        <div
          className={`${styles.emptyCircle} ${!checked ? styles.active : ""}`}
          style={{ width: size, height: size }}
          //   style={{
          //     display: checked ? "none" : "inline-block",
          //   }}
          //   style={{ visibility: checked ? "hidden" : "visible" }}
        ></div>
      </span>
    </>
  );
});

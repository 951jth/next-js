"use client";
import { Checkbox, Input } from "antd";
import checkCircle from "@icons/checkCircle.png";
import Image from "next/image";
import dayjs from "dayjs";
import { memo, useCallback, useEffect, useState } from "react";
import _ from "lodash";
import styles from "./RoundCheckbox.module.css";

export default memo(function RoundCheckbox({
  value,
  setValue,
  form,
  formName,
  size = 18,
  label,
  style,
}) {
  const [checked, setChecked] = useState(!!value);
  const formChecked = _.debounce(() => {
    const clone = _.cloneDeep(checked);
    setChecked((old) => {
      return !old;
    });
    if (form && formName) {
      form.setFieldsValue({ [formName]: !clone });
    }
    if (setValue) setValue(!clone);
  }, 50);

  useEffect(() => {
    setChecked(!!value);
  }, [value]);

  return (
    <>
      <span
        onClick={formChecked}
        style={{ width: size, height: size, ...style }}
        className={styles.checkboxWrap}
      >
        <Image
          src={checkCircle}
          width={size}
          height={size}
          alt="checkbox"
          className={`${styles.checkImage} ${checked ? styles.active : ""}`}
          style={{ width: size, height: size }}
        />
        <div
          className={`${styles.emptyCircle} ${!checked ? styles.active : ""}`}
          style={{ width: size, height: size }}
        ></div>
      </span>
      {label && (
        <label className={styles.checkboxLabel} onClick={formChecked}>
          {label}
        </label>
      )}
    </>
  );
});

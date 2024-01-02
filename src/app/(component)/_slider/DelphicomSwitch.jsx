"use client";
import { useEffect, useState } from "react";
import styles from "./DelphicomSwitch.module.css";

export default function DelphicomSwitch({
  checkChilren,
  unCheckedChildren,
  checked,
  setChecked,
  className,
  ...others
}) {
  const [currentChecked, setCurrentChecked] = useState(checked);

  useEffect(() => {
    setCurrentChecked(checked);
  }, [checked]);

  return (
    <div {...others} className={`${styles.switchWrap} ${className}`}>
      <div
        className={styles.unchecked}
        onClick={() => {
          setCurrentChecked(false);
          setChecked && setChecked(false);
        }}
      >
        <span className={!currentChecked ? styles.checkedText : ""}>
          {unCheckedChildren}
        </span>
      </div>
      <div
        className={styles.checked}
        onClick={() => {
          setCurrentChecked(true);
          setChecked && setChecked(true);
        }}
      >
        <span className={currentChecked ? styles.checkedText : ""}>
          {checkChilren}
        </span>
      </div>
      <div
        className={`${styles.selected} ${
          currentChecked ? styles.right : styles.left
        }`}
      ></div>
    </div>
  );
}

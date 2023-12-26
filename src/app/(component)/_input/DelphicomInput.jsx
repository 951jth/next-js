import { Input } from "antd";
import styles from "./DelphicomInput.module.css";

export default function DelphicomInput({
  className,
  height = 54,
  fontSize = 14,
  ...others
}) {
  return (
    <>
      <Input {...others} className={`${className} ${styles.inputCustom}`} />
    </>
  );
}

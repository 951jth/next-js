import { useEffect, useState } from "react";
import { commaOfNumber } from "@/util/Format";
import DelphicomInput from "./DelphicomInput";
import styles from "./BudgetInput.module.css";

export default function BudgetInput({
  value,
  onChange,
  minNumber,
  isComma,
  ...others
}) {
  const [maskedValue, setMaskedValue] = useState(value);

  function mask(value) {
    if (!value && !minNumber && value !== 0) return "";
    if (!value && minNumber) return 0;
    let text = "";
    text = value
      .toString()
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1")
      .replace(/(\.\d{4}).+/g, "$1");
    if (isComma) text = commaOfNumber(text);
    return text;
  }

  function emitChange(e) {
    e.target.value = mask(e.target.value);
    const { value } = e.target;
    setMaskedValue(value);

    if (onChange) onChange(e);
  }

  useEffect(() => {
    setMaskedValue(mask(value));
  }, [value]);

  return (
    <DelphicomInput
      suffix="만원"
      value={maskedValue}
      onChange={emitChange}
      className={styles.inputWrap}
      {...others}
    />
  );
}

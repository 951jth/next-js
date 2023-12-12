import Image from "next/image";
import styles from "./ReasonCard.module.css";
import sample from "@icons/delphicom_color.svg";

export default function ReasonCard(props) {
  const { text, icon, iconStyle } = props;
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text || "-"}</p>
      <div className={styles.cardIcon} style={iconStyle}>
        {icon}
      </div>
    </div>
  );
}

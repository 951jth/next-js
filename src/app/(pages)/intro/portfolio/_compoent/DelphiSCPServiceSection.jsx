import Image from "next/image";
import styles from "./DelphiSCPServiceSection.module.css";
import scp from "@images/scpPlatform.png";
export default function DelphiSCPServiceSection() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>DELPHI-SCP 지능망 서비스 플랫폼(SCP/IP)</p>
      <div className={styles.scpImage}>
        <Image src={scp} style={{ objectFit: "cover" }} fill alt="scp" />
      </div>
      <ul className={styles.explains}>
        <li>지능망 SCP, IP 플랫폼</li>
        <li>ITU, ANSI 등의 국제표준 규격을 따르는 개방형 구조</li>
        <li>Database는 대용량처리를 위한 메모리 DB 사용.</li>
        <li>
          지능망 표준 프로토콜(INAP/CAP/IS-41D, SIP) 지원 및 다양한 프로토콜
          Stack 수용 가능
        </li>
      </ul>
    </div>
  );
}

import Image from "next/image";
import styles from "./DelphiSig2Section.module.css";
import sig2 from "@images/sigSystem.png";
import FuncExplainTable from "./FuncExplainTable";

export default function DelphiSig2Section() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        DELPHI-SIG2 시스템
        <br />
        (SIGNALING AND MEDIA CONVERTER)
      </p>
      <div className={styles.sig2Image}>
        <Image
          src={sig2}
          fill
          style={{ objectFit: "cover", maxWidth: "100%" }}
          alt="sig2"
        />
        {/* sizes="(max-width: 378px) 100vw" */}
      </div>
      <ul className={styles.sig2ExplainList}>
        <li>
          Delphi-Sig2는 기존의 Packet통신과 Circuit통신의 다양한 Protocol의
          신호처리와 음성Channel을 상호 변환하게 하는 Signaling 및 Media Gateway
          시스템
        </li>
        <li>
          Delphi-Sig2 는 고객의 음성 전화 시스템과 연계하여 대용량 Out-bound
          Call 스케쥴링, In/Out-Bound Call 연결시 각종 ARS 안내멘트 및 ARS
          시나리오 제어, 인증된 가입자에 한 호 제어 기능을 제공
        </li>
        <li>
          Delphi-Sig2 는 다양한 중계루트 제어 기능, 과금 처리 기능 및 운용
          유지보수 기능을 제공
        </li>
        <li>
          신호 처리 Protocol : R2, ISDN-PRI, SS7, H.323, SIP, Sigtran, Megaco,
          MGCP
        </li>
      </ul>
      <p className={styles.subTitle}>주요기능</p>
      <FuncExplainTable />
      <div className={styles.stick}></div>
    </div>
  );
}

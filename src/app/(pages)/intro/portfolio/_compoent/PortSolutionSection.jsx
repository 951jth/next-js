import DelphicomTable from "@/app/(component)/_table/DelphicomTable";
import styles from "./PortSolutionSection.module.css";
import DelphiVASTable from "./DelphiVASTable";
import system from "@images/voipSystem.png";
import Image from "next/image";
import ModuleExplainTable from "./ModuleExplainTable";
import useResponsive from "@/hook/useResponsive";

export default function PortSolutionSection() {
  const { mobile } = useResponsive();
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <p className={styles.sectionTitle}>음성 솔루션 포트폴리오</p>
        <p className={styles.sectionDescription}>
          델피콤은 유무선 및 VOIP솔루션을 {mobile && <br />}지속적으로 개발하여
          {!mobile ? <br /> : " "}
          통신 전문의 첨단 제품{mobile && <br />} 및 서비스로 수많은 고객사의
          needs를 {mobile && <br />}만족시키며 함께 해왔습니다.
        </p>
        <div className={styles.stick}></div>
        <p className={styles.delphiVas}>DELPHI-VAS</p>
        <p className={styles.delphiVasDesc}>
          DELPHI-VAS(VALUE ADDED SERVICE)는 그리스어로 ‘지구의 중심’의 뜻으로
          OPEN ARCHITECHTURE 구조로 다양한 부가 서비스의 기능을 제공하며
          운용자에게는 편리성 및 안정성, 사업자에게는 저비용으로 최대의 효율성을
          제공하는 서비스 PLATFORM
        </p>
        <DelphiVASTable />
        <p className={styles.subTitle}>시스템 구성도</p>
        <div className={styles.systemImage}>
          <Image
            src={system}
            alt="system"
            fill
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />
        </div>
        <ul className={styles.systemDescription}>
          <li>
            선/후불 카드 개통 및 인증, 나라별, 시간대별, 가입자 등급별 차등
            Rating을 통한 과금 처리, 선불 카드 재충전
          </li>
          <li>월별 매출액 및 잔액 정보 관리, 등을 위한 Elite Billing</li>
          <li>No.7 및 VoIP 신호처리 및 호제어를 위한 신호 처리부</li>
          <li>
            In/Out-Bound 채널 설정, 안내멘트 재생, DTMF 수신 및 시나리오 제어
            등을 처리하는 IVR
          </li>
          <li>
            선택적으로 Web을 통한 카드 충전 및 사용 이력 조회를 위한 Web
            Server로 구성
          </li>
        </ul>
        <p className={styles.subTitle}>모듈별 주요 기능</p>
        <ModuleExplainTable />
        <div
          className={styles.stick}
          style={{ marginTop: mobile ? 105 : 120 }}
        ></div>
      </div>
    </div>
  );
}

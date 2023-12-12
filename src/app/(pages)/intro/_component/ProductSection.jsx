import { Col, Flex, Row } from "antd";
import Image from "next/image";
import styles from "./ProductSection.module.css";
import reasonBg from "@images/reasonBg.svg";
import carsuri from "@images/carsuri.svg";
import mozzle from "@images/mozzle.svg";
import bizcall from "@images/bizcall.svg";
import { Styles } from "@/util/CommonStyle";

export default function ProductSection() {
  return (
    <div className={styles.container}>
      <Image
        src={reasonBg}
        alt="reasonBg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles.overlay}>
        <p className={styles.bold}>
          <span className={styles.emphasis}>델피콤</span>과 함께 해야 하는 이유
        </p>
        <p className={styles.description}>
          델피콤은 단순 개발만 진행하는 아웃소싱 회사가 아닙니다.
          <br />
          자체 서비스 출시 및 운영 노하우와 마케팅 경험까지 공유해 드립니다.
        </p>
        <Row gutter={[0, 90]}>
          <Col lg={8} md={8} sm={24} xs={24} className={styles.productItme}>
            <Image src={carsuri} alt="carsuri" width={125} height={124} />
            <p>
              출장 엔진오일 교환,
              <br />
              배터리 교환 서비스
            </p>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24} className={styles.productItme}>
            <Image src={mozzle} alt="carsuri" width={125} height={124} />
            <p>
              기수, 원우회(대학원),
              <br /> 골프 모임 커뮤니티
            </p>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24} className={styles.productItme}>
            <Image src={bizcall} alt="carsuri" width={125} height={124} />
            <p>
              고객이 업체로 통화 시 전화 유입 경로,
              <br /> 실시간 콜 로그 및 통화내역을 제공 서비스
            </p>
          </Col>
          <Col lg={12} sm={24} xs={24} className={styles.rowCenter}>
            <div className={styles.figureGroup}>
              <div className={`${styles.analysis} ${styles.figure}`}>
                <span className={styles.figureFont}>시장분석</span>
              </div>
              <div className={`${styles.platform} ${styles.figure}`}>
                <span className={styles.figureFont}>플랫폼 개발</span>
              </div>
              <div className={`${styles.marketing} ${styles.figure}`}>
                <span className={styles.figureFont}>마케팅</span>
              </div>
              <div className={styles.center}>
                <span className={styles.figureFont}>델피콤</span>
              </div>
            </div>
          </Col>
          <Col lg={12} sm={24} xs={24} style={Styles.rowVerticalCenter}>
            <p className={styles.figureDescription}>
              시장분석, 플랫폼 개발, 마케팅까지
              <br />
              스타트업 창업과 투자 유치까지 경험한
              <br />
              CEO, CTO 출신이
              <br />
              여러분의 파트너가 되어 드립니다.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

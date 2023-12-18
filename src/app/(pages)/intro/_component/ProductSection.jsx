import { Col, Flex, Row } from "antd";
import Image from "next/image";
import styles from "./ProductSection.module.css";
import reasonBg from "@images/reasonBg.svg";
import carsuri from "@icons/carsuri.png";
import mozzle from "@icons/mozzle.png";
import bizcall from "@icons/bizcall.png";
import triangle from "@images/triangle.svg";
import { Styles } from "@/util/CommonStyle";
import { isMobile } from "@/util/Responsive";
import useResponsive from "@/hook/useResponsive";

export default function ProductSection() {
  const { mobile } = useResponsive();
  const movePage = (url) => url && window.open(url);

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <p className={styles.bold}>
          <span className={styles.emphasis}>델피콤</span>과{mobile && <br />}{" "}
          함께 해야 하는 이유
        </p>
        <p className={styles.description}>
          델피콤은 단순 개발만 진행하는 아웃소싱 회사가 아닙니다.
          <br />
          자체 서비스 출시 및 운영 노하우와 마케팅 경험까지 공유해 드립니다.
        </p>
        <Row gutter={[0, { xs: 68, sm: 68, md: 68, lg: 90 }]} justify="center">
          <Col
            lg={8}
            md={8}
            sm={24}
            xs={24}
            className={styles.productItem}
            onClick={() => movePage("https://www.carsuri.co.kr")}
          >
            <Image src={carsuri} alt="carsuri" width={188} height={197} />
            <p>
              출장 엔진오일 교환,
              <br />
              배터리 교환 서비스
            </p>
          </Col>
          <Col
            lg={8}
            md={8}
            sm={24}
            xs={24}
            className={styles.productItem}
            onClick={() => movePage("https://www.mozzle.co.kr/")}
          >
            <Image src={mozzle} alt="carsuri" width={188} height={223} />
            <p>
              기수, 원우회(대학원),
              <br /> 골프 모임 커뮤니티
            </p>
          </Col>
          <Col
            lg={8}
            md={8}
            sm={24}
            xs={24}
            className={styles.productItem}
            onClick={() => movePage("https://www.050bizcall.co.kr")}
          >
            <Image src={bizcall} alt="carsuri" width={188} height={197} />
            <p>
              고객이 업체로 통화 시 전화 유입 경로,
              <br /> 실시간 콜 로그 및 통화내역을 제공 서비스
            </p>
          </Col>
          <Col
            style={
              mobile
                ? {
                    display: "flex",
                    flexDirection: "column-reverse",
                    marginTop: "-8px",
                  }
                : Styles.rowCenterCenter
            }
          >
            <div style={{ maxWidth: "442px" }}>
              <p
                className={styles.triangleDescription}
                style={
                  mobile ? { textAlign: "center", margin: "0 auto" } : null
                }
              >
                시장분석, 플랫폼 개발, 마케팅까지 스타트업 창업과 투자 유치까지
                경험한 CEO, CTO 출신이 여러분의 파트너가 되어 드립니다.
              </p>
            </div>
            <div className={styles.triangle}>
              <Image
                fill
                style={{ objectFit: "cover" }}
                src={triangle}
                alt="triangle"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

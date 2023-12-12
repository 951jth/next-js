import { Col, Row } from "antd";
import styles from "./PortfolioSection.module.css";
import carsuri from "@images/carsuriApp.svg";
import mozzle from "@images/mozzleApp.svg";
import bizcall from "@images/bizcallWeb.svg";
import qrn from "@images/qrnApp.svg";
import insureParts from "@images/insurepartsApp.svg";
import lib from "@images/libWeb.svg";
import Image from "next/image";

export default function PortfolioSection() {
  const appList = [
    { src: carsuri, title: "카수리", type: "Application" },
    { src: carsuri, title: "모즐", type: "Application" },
    { src: carsuri, title: "050 비즈콜", type: "Application" },
    { src: carsuri, title: "두산산업차량 QRN", type: "Application" },
    { src: carsuri, title: "인슈어파츠", type: "Application" },
    { src: carsuri, title: "두산산업차량 LIB", type: "Application" },
  ];
  const AppCard = ({ src, title, type, backColor }) => {
    return (
      <div className={styles.card}>
        <div className={styles.cardContents} style={{ background: backColor }}>
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={title}
          />
        </div>
        <p className={styles.appTitle}>{title}</p>
        <p className={styles.appType}>{type}</p>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <p className="section-title">포트폴리오</p>
      <p className="section-description">
        다년간의 경험이 있는 개발 전문 회사로 기획부터 참여하여
        <br />
        고객사와 유저 모두를 만족할 수 있는 앱과 사이트를 제작합니다.
      </p>
      <Row gutter={[30, 100]} className={styles.applications}>
        <Col>
          <AppCard
            src={carsuri}
            title="카수리"
            type="Application"
            backColor="#F0F8FF"
          />
        </Col>
        <Col>
          <AppCard
            src={mozzle}
            title="모즐"
            type="Application"
            backColor="#F1FFFF"
          />
        </Col>
        <Col>
          <AppCard
            src={bizcall}
            title="050 비즈콜"
            type="Site"
            backColor="#FFF9EB"
          />
        </Col>
        <Col>
          <AppCard
            src={qrn}
            title="두산산업차량 QRN"
            type="Application"
            backColor="#F4F4F4"
          />
        </Col>
        <Col>
          <AppCard
            src={insureParts}
            title="인슈어파츠"
            type="Application"
            backColor="#FFF8F6"
          />
        </Col>
        <Col>
          <AppCard
            src={lib}
            title="두산산업차량 LIB"
            type="Site"
            backColor="#F0F8FF"
          />
        </Col>
      </Row>
    </div>
  );
}

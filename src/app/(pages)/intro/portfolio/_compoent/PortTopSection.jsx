import { Col, Row } from "antd";
import styles from "./PortTopSection.module.css";
import { useState } from "react";
import Image from "next/image";
import useResponsive from "@/hook/useResponsive";

//imgs
import carsuri from "@images/carsuriApp.png";
import mozzle from "@images/mozzleApp.png";
import bizcall from "@images/bizcallWeb.png";
import qrn from "@images/qrnApp.png";
import insureParts from "@images/insurepartsApp.png";
import lib from "@images/libWeb.png";
import PortfolioDetailModal from "../../_component/PortfolioDetailModal";
import { slideItems } from "@/item/items";

export default function PortTopSection() {
  const { mobile } = useResponsive();
  const [modal, onModal] = useState(false);

  const AppCard = ({ src, title, type, backColor, modalType }) => {
    return (
      <div
        className={styles.card}
        onClick={() => modalType && onModal(slideItems[modalType])}
      >
        <div className={styles.cardContents} style={{ background: backColor }}>
          <Image
            src={src}
            fill
            alt={title}
            loading="lazy"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 378px) 100vw"
          />
        </div>
        <p className={styles.appTitle}>{title}</p>
        <p className={styles.appType}>{type}</p>
      </div>
    );
  };
  return (
    <>
      <div className={styles.container}>
        <p className={styles.sectionTitle}>포트폴리오</p>

        <p className={styles.sectionDescription}>
          델피콤은 20년간의 경험과 노하우를 가진 {mobile && <br />}개발 전문
          회사로 기획부터 참여하여 <br />
          고객사와 유저 모두를 만족할 수 있는 {mobile && <br />}앱과 사이트를
          제작합니다.
        </p>
        <Row
          gutter={[30, { xs: 40, sm: 40, md: 40, lg: 100 }]}
          className={styles.applications}
        >
          <Col>
            <AppCard
              src={carsuri}
              title="카수리"
              type="Application"
              backColor="#F0F8FF"
              modalType="carsuri"
            />
          </Col>
          <Col>
            <AppCard
              src={mozzle}
              title="모즐"
              type="Application"
              backColor="#F1FFFF"
              modalType="mozzle"
            />
          </Col>
          <Col>
            <AppCard
              src={bizcall}
              title="050 비즈콜"
              type="Website"
              backColor="#FFF9EB"
              modalType="bizcall"
            />
          </Col>
          <Col>
            <AppCard
              src={qrn}
              title="두산산업차량 QRN"
              type="Application"
              backColor="#F4F4F4"
              modalType="qrn"
            />
          </Col>
          <Col>
            <AppCard
              src={insureParts}
              title="인슈어파츠"
              type="Application"
              backColor="#FFF8F6"
              modalType="insureParts"
            />
          </Col>
          <Col>
            <AppCard
              src={lib}
              title="두산산업차량 LIB"
              type="Website"
              backColor="#F0F8FF"
              modalType="lib"
            />
          </Col>
        </Row>
      </div>
      <PortfolioDetailModal modal={modal} onModal={onModal} />
    </>
  );
}

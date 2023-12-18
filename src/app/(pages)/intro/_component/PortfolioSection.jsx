import { Col, Row } from "antd";
import styles from "./PortfolioSection.module.css";
import carsuri from "@images/carsuriApp.png";
import mozzle from "@images/mozzleApp.png";
import bizcall from "@images/bizcallWeb.png";
import qrn from "@images/qrnApp.png";
import insureParts from "@images/insurepartsApp.png";
import lib from "@images/libWeb.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useResponsive from "@/hook/useResponsive";

export default function PortfolioSection() {
  const { mobile } = useResponsive();
  // const router = useRouter();
  const movePage = (url) => url && window.open(url);

  const AppCard = ({ src, title, type, backColor, navigate }) => {
    return (
      <div
        className={styles.card}
        onClick={() => navigate && movePage(navigate)}
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
    <div className={styles.container}>
      <p className="section-title">포트폴리오</p>
      {mobile ? (
        <p className="section-description">
          다년간의 경험이 있는 <br />
          개발 전문 회사로 기획부터 참여하여
          <br />
          고객사와 유저 모두를 만족할 수 있는 <br />
          앱과 사이트를 제작합니다.
        </p>
      ) : (
        <p className="section-description">
          다년간의 경험이 있는 개발 전문 회사로 기획부터 참여하여
          <br />
          고객사와 유저 모두를 만족할 수 있는 앱과 사이트를 제작합니다.
        </p>
      )}
      <Row
        gutter={[30, { xs: 50, sm: 50, md: 50, lg: 100 }]}
        className={styles.applications}
      >
        <Col>
          <AppCard
            src={carsuri}
            title="카수리"
            type="Application"
            backColor="#F0F8FF"
            // navigate="https://www.carsuri.co.kr"
          />
        </Col>
        <Col>
          <AppCard
            src={mozzle}
            title="모즐"
            type="Application"
            backColor="#F1FFFF"
            // navigate="https://www.mozzle.co.kr/"
          />
        </Col>
        <Col>
          <AppCard
            src={bizcall}
            title="050 비즈콜"
            type="Website"
            backColor="#FFF9EB"
            // navigate="https://www.050bizcall.co.kr"
          />
        </Col>
        <Col>
          <AppCard
            src={qrn}
            title="두산산업차량 QRN"
            type="Application"
            backColor="#F4F4F4"
            // navigate="https://play.google.com/store/apps/details?id=com.doosaniv.qrn&hl=ko&gl=US"
          />
        </Col>
        <Col>
          <AppCard
            src={insureParts}
            title="인슈어파츠"
            type="Application"
            backColor="#FFF8F6"
            // navigate="https://insurparts.com/"
          />
        </Col>
        <Col>
          <AppCard
            src={lib}
            title="두산산업차량 LIB"
            type="Website"
            backColor="#F0F8FF"
            // navigate="www.carsuri.co.kr"
          />
        </Col>
      </Row>
    </div>
  );
}

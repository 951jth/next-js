import { Col, Row } from "antd";
import styles from "./PortfolioSection.module.css";
import { useState } from "react";
import Image from "next/image";
import useResponsive from "@/hook/useResponsive";
import PortfolioDetailModal from "./PortfolioDetailModal";

//imgs
import carsuri from "@images/carsuriApp.png";
import mozzle from "@images/mozzleApp.png";
import bizcall from "@images/bizcallWeb.png";
import qrn from "@images/qrnApp.png";
import insureParts from "@images/insurepartsApp.png";
import lib from "@images/libWeb.png";
import carsuri1 from "@images/carsuri_01.png";
import carsuri2 from "@images/carsuri_02.png";
import carsuri3 from "@images/carsuri_03.png";
import carsuri4 from "@images/carsuri_04.png";
import mozzle1 from "@images/mozzle_01.png";
import mozzle2 from "@images/mozzle_02.png";
import mozzle3 from "@images/mozzle_03.png";
import mozzle4 from "@images/mozzle_04.png";
import mozzle5 from "@images/mozzle_05.png";
import bizcall1 from "@images/bizcall_01.png";
import bizcall2 from "@images/bizcall_02.png";
import bizcall3 from "@images/bizcall_03.png";
import bizcall4 from "@images/bizcall_04.png";
import qrn1 from "@images/qrn_01.png";
import qrn2 from "@images/qrn_02.png";
import qrn3 from "@images/qrn_03.png";
import qrn4 from "@images/qrn_04.png";
import insure1 from "@images/insureParts_01.png";
import insure2 from "@images/insureParts_02.png";
import insure3 from "@images/insureParts_03.png";
import insure4 from "@images/insureParts_04.png";
import lib1 from "@images/lib_01.png";
import lib2 from "@images/lib_02.png";
import lib3 from "@images/lib_03.png";
import lib4 from "@images/lib_04.png";

export default function PortfolioSection() {
  const { mobile } = useResponsive();
  const [modal, onModal] = useState(false);
  const modalItems = {
    carsuri: {
      title: "카수리",
      type: "Application",
      description: (
        <>
          전국 착한 정비소 검색과 수리 견적까지 알려주고
          <br /> 스마트 차계부 기능까지 사용할 수 있는 자동차 관리 필수 어플
        </>
      ),
      mobileDescription: (
        <>
          전국 착한 정비소 검색과 수리 견적까지
          <br />
          알려주고 스마트 차계부 기능까지
          <br />
          사용할 수 있는 자동차 관리 필수 어플
        </>
      ),
      images: [carsuri1, carsuri2, carsuri3, carsuri4],
      iosLink: `https://apps.apple.com/kr/app/id968243793`,
      andLink: `https://play.google.com/store/apps/details?id=com.dpc.carpro2&hl=ko&gl=US`,
    },
    mozzle: {
      title: "모즐",
      type: "Application",
      description: (
        <>
          모임 관리 및 회원 명부 관리를 쉽고 편하게 할 수 있는
          <br /> 기수 모임, 원우회(대학원) 모임, 골프 모임 커뮤니티
        </>
      ),
      mobileDescription: (
        <>
          모임 관리 및 회원 명부 관리를 쉽고 편하게 할 수 있는 기수 모임,
          원우회(대학원) 모임, 골프 모임 커뮤니티
        </>
      ),
      images: [mozzle1, mozzle2, mozzle3, mozzle4, mozzle5],
      iosLink: `https://apps.apple.com/kr/app/id6446963035`,
      andLink: `https://play.google.com/store/apps/details?id=com.dpc.mozzle`,
    },
    bizcall: {
      title: "050비즈콜",
      type: "Website",
      description: (
        <>
          전화 예약, 주문 알림 콜 플랫폼 반응형 웹으로
          <br /> 수많은 매체를 통해 이루어지는 광고 효과를 측정하기 위한 <br />
          신개념의 서비스이며
          <br /> 고객이 업체로 통화 시 알림 멘트를 통해 전화 유입 경로를
          알려주고, <br />
          실시간 콜로그 및 통화 내역을 제공
        </>
      ),
      mobileDescription: (
        <>
          전화 예약, 주문 알림 콜 플랫폼 반응형 웹으로 수많은 매체를 통해
          이루어지는 광고 효과를 측정하기 위한 신개념의 서비스이며 <br /> 고객이
          업체로 통화 시 알림 멘트를 통해 전화 유입 경로를 알려주고, <br />
          실시간 콜로그 및 통화 내역을 제공
        </>
      ),
      images: [bizcall1, bizcall2, bizcall3, bizcall4],
      webLink: "https://www.050bizcall.co.kr/",
    },
    qrn: {
      title: "두산산업차량 QRN",
      type: "Application",
      description: (
        <>
          고객과 정비기사, 대리점을 연결하여
          <br />
          새로운 가치를 제공하기 위한 두산산업차량 지게차 서비스 앱으로 <br />
          지게차 등록 및 운영 관리, 하자 신고, 차계부 관리 등의
          <br />
          지게차를 사용하면서 필요한 다양한 서비스를 제공
        </>
      ),
      mobileDescription: (
        <>
          고객과 정비기사, 대리점을 연결하여
          <br />
          새로운 가치를 제공하기 위한
          <br />
          두산산업차량의 지게차 서비스 앱
        </>
      ),
      images: [qrn1, qrn2, qrn3, qrn4],
      iosLink: `https://apps.apple.com/pl/app/id1458562182`,
      andLink: `https://play.google.com/store/apps/details?id=com.doosaniv.qrn`,
    },
    insureParts: {
      title: "인슈어파츠",
      type: "Application",
      description: (
        <>
          보험사 연계를 통한 부품 중개 서비스로 차량 수리 시<br />
          공업사에서 요청한 부품을 가까운 부품사와 연결 서비스
        </>
      ),
      mobileDescription: (
        <>
          보험사 연계를 통한 부품 중개 서비스로 차량 수리 시 공업사에서 요청한
          부품을 가까운 부품사와 연결 서비스
        </>
      ),
      images: [insure1, insure2, insure3, insure4],
      iosLink: `https://apps.apple.com/kr/app/id1556776377`,
      andLink: `https://play.google.com/store/apps/details?id=com.insurparts.repair_shop`,
    },
    lib: {
      title: "두산산업차량 LIB",
      type: "Website",
      description: (
        <>
          두산 산업차량(지게차) 관리자 웹 서비스로
          <br />
          A/S 및 정기 점검, 관리 대시 보드 / 서비스 현황을 제공하여
          <br />
          효율적인 서비스 진행 상태 및 분석을 제공
        </>
      ),
      mobileDescription: (
        <>
          두산 산업차량(지게차) 관리자 웹 서비스로 A/S 및 정기 점검, 관리 대시
          보드 / 서비스 현황을 제공하여 <br />
          효율적인 서비스 진행 상태 및 분석을 제공
        </>
      ),
      images: [lib1, lib2, lib3, lib4],
      webLink: `https://ocs.doosan-iv.com/login`,
    },
  };

  const AppCard = ({ src, title, type, backColor, modalType }) => {
    return (
      <div
        className={styles.card}
        onClick={() => modalType && onModal(modalItems[modalType])}
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

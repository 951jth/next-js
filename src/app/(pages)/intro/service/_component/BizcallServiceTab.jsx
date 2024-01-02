import { Button, Col, Row } from "antd";
import styles from "./BizcallServiceTab.module.css";
import Image from "next/image";
import bizcall from "@images/bizcall_01.png";
import composit from "@images/bizcallComposition.png";
import service1 from "@icons/icon_service_01.png";
import service2 from "@icons/icon_service_02.png";
import service3 from "@icons/icon_service_03.png";
import service4 from "@icons/icon_service_04.png";
import service5 from "@icons/icon_service_05.png";
import service6 from "@icons/icon_service_06.png";
import service7 from "@icons/icon_service_07.png";
import service8 from "@icons/icon_service_08.png";
import useResponsive from "@/hook/useResponsive";
import { useRouter } from "next/navigation";

export default function BizcallServiceTab() {
  const { mobile } = useResponsive();
  const featureItems = [
    {
      src: service1,
      iconWidth: [60, 50], //0: PC, 1:MOBILE
      iconHeight: [59, 51], //0: PC, 1:MOBILE
      title: "050 회선 전문 기업",
      contents: (
        <>
          정부 승인한 별정 통신 사업자로
          <br />
          통신교환기 보유 및 자체 서비스 운영으로
          <br />
          고객사가 원하는 커스터마이징 가능
        </>
      ),
    },
    {
      src: service2,
      iconWidth: [60, 50],
      iconHeight: [62, 51],
      title: "1위 사업자들의 선택",
      contents: (
        <>
          직방, 야놀자, 여기어때, 배달통, 요기요 등<br /> 대다수의 1위
          사업자들이 선택하고 <br />
          이용 중
        </>
      ),
    },
    {
      src: service3,
      iconWidth: [60, 50],
      iconHeight: [57, 48],
      title: "관리자 시스템 제공",
      contents: (
        <>
          번호관리, 실시간 통화내역, 콜멘트 운영,
          <br />
          번호별 통계자료 확인
        </>
      ),
    },
    {
      src: service4,
      iconWidth: [60, 50],
      iconHeight: [47, 39],
      title: "시스템 연동 API",
      contents: (
        <>
          서버 연동을 통한 번호설정,
          <br />
          실시간 콜로그 수신 등 오픈 API 제공
        </>
      ),
    },
    {
      src: service5,
      iconWidth: [60, 50],
      iconHeight: [74, 62],
      title: "관련 기술 특허 보유",
      contents: (
        <>
          업계 선두 업체로 안정적인 서비스 제공
          <br />및 사업 보장
        </>
      ),
    },
    {
      src: service6,
      iconWidth: [60, 50],
      iconHeight: [58, 48],
      title: "녹취 서비스",
      contents: (
        <>
          050회선에 녹취 기능을 설정 기능으로
          <br />
          관련 비즈니스 활용 가능
        </>
      ),
    },
    {
      src: service7,
      iconWidth: [60, 50],
      iconHeight: [51, 43],
      title: "TTS",
      contents: (
        <>
          텍스트 음성 변환 기능으로 주문내역
          <br />
          (예약정보) 등의 무인 자동정보 전달
          <br />
          시스템
        </>
      ),
    },
    {
      src: service8,
      iconWidth: [60, 50],
      iconHeight: [59, 49],
      title: "080",
      contents: (
        <>
          080번호를 이용한 고객 무료통화
          <br />
          시스템으로 통화요금은 해당 사업자가
          <br />
          별도 정산
        </>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <p className={styles.subTitle}>050비즈콜</p>
        <div className={styles.gotoSiteRow}>
          <Button
            className={styles.gotoSiteBtn}
            onClick={() => window.open("https://www.050bizcall.co.kr/")}
          >
            050비즈콜 Site
          </Button>
        </div>
      </div>
      <p className={styles.explain}>
        050비즈콜은 수 많은 매체를 통해 이루어지는 {mobile && <br />}광고 효과를
        측정하기 위한 신개념의 서비스입니다.
        <br />
        고객이 업체로 통화 시 알림 멘트를 통해 {mobile && <br />}전화 유입
        경로를 알려주고, 실시간 콜 로그 및 {mobile && <br />}통화내역을 제공해
        주는 서비스입니다.
      </p>
      <div className={styles.imageContainerWrap}>
        <div className={styles.imageBackBg}></div>
        <Image src={bizcall} className={styles.bizMainImage} alt="biz_main" />
      </div>
      <p className={styles.subTitle}>050비즈콜 구성도</p>
      <div className={styles.bizCompositionImage}>
        <Image
          src={composit}
          alt="biz_composit"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className={styles.subTitle}>서비스 주요 특성</p>
      <Row
        gutter={[mobile ? 0 : 100, { lg: 74, md: 40, sm: 40, xs: 40 }]}
        className={styles.featureWrap}
      >
        {featureItems.map((item, index) => {
          return (
            <Col
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className={styles.cardWrap}
              key={index}
            >
              <div className={styles.featureCard}>
                <div>
                  <Image
                    src={item.src}
                    alt="service"
                    width={item.iconWidth[mobile ? 1 : 0] || item?.iconWidth}
                    height={item.iconHeight[mobile ? 1 : 0] || item?.iconHeight}
                    className={styles.featureIconImage}
                  />
                </div>
                <div>
                  <p className={styles.featureTitle}>{item?.title}</p>
                  <p className={styles.featureContents}>{item?.contents}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

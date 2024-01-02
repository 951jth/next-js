import { Button, Col, Flex, Row } from "antd";
import styles from "./MozzleServiceTab.module.css";
import AppStoreButton from "@/app/(component)/_button/AppStoreButton";
import GooglePlayButton from "@/app/(component)/_button/GooglePlayButton";
import Image from "next/image";
import mozzleBg from "@images/mozzleBg.png";
import mozzleBgM from "@images/mozzleBg_m.png";
import note from "@images/note.png";
import mozzle3 from "@images/mozzle_03.png";
import mozzle4 from "@images/mozzle_04.png";
import mozzle5 from "@images/mozzle_05.png";
import notiIcon from "@icons/Icon_notifications_active.png";
import forum from "@icons/icon_forum.png";
import diversity from "@icons/Icon_diversity_3.png";
import clinicalNote from "@icons/clinical_notes.png";
import golfCourse from "@icons/golf_course.png";
import strategy from "@icons/strategy.png";
import localSee from "@icons/local_see.png";
import reward from "@icons/rewarded_ads.png";
import useResponsive from "@/hook/useResponsive";

export default function MozzleServiceTab() {
  const { mobile } = useResponsive();
  const convenienceItems = [
    {
      icon: clinicalNote,
      text: (
        <>
          매년 기수별
          <br />
          집행부 관리
        </>
      ),
    },
    {
      icon: diversity,
      text: (
        <>
          기수별 공지 사항, 게시판,
          <br /> 행사 일정과 사진 관리
        </>
      ),
    },
    {
      icon: forum,
      text: (
        <>
          재학생, 동문 선후배간
          <br />
          커뮤니티가 가능
        </>
      ),
    },
    {
      icon: notiIcon,
      text: (
        <>
          경조사, 행사 알림,
          <br />
          단체 문자 발송
        </>
      ),
    },
  ];

  const enjoyGolfItems = [
    {
      icon: golfCourse,
      width: [51, 31], //0: PC, 1:MOBILE
      height: [59, 36], //0: PC, 1:MOBILE
      color: "#FFEEF7",
      text: (
        <>
          골프장별 스케줄
          <br />
          관리
        </>
      ),
    },
    {
      icon: strategy,
      width: [61, 37],
      height: [62, 38],
      color: "#F3FFFD",
      text: (
        <>
          참석자 및 조편성 관리
          <br />
          조편성 결과 공유
        </>
      ),
    },
    {
      icon: localSee,
      width: [54, 33],
      height: [54, 33],
      color: "#F5F2FF",
      text: (
        <>
          스케줄 별<br />
          행사 사진 공유
        </>
      ),
    },
    {
      icon: reward,
      width: [60, 37],
      height: [60, 37],
      color: "#FFF8D5",
      text: (
        <>
          단체팀 평균 스코어,
          <br />
          시상자 관리
        </>
      ),
    },
  ];

  const openApp = () => {
    const agent = navigator.userAgent.toLowerCase();
    let url = `https://play.google.com/store/apps/details?id=com.dpc.mozzle`;
    if (agent.indexOf("iphone") > -1)
      url = `https://apps.apple.com/kr/app/id6446963035`;
    window.open(url);
  };

  return (
    <div className={styles.container}>
      {mobile ? (
        <Flex justify="space-between">
          <p className={styles.title}>MOZZLE</p>
          <div className={styles.gotoSiteRow}>
            <Button
              className={styles.gotoSiteBtn}
              onClick={() => window.open("https://www.mozzle.co.kr/")}
            >
              모즐 소개 Site
            </Button>
            <Button
              className={styles.appDownBtn}
              type="primary"
              onClick={openApp}
            >
              앱 다운로드
            </Button>
          </div>
        </Flex>
      ) : (
        <>
          <p className={styles.title}>MOZZLE</p>
          <div className={styles.gotoSiteRow}>
            <Button
              className={styles.gotoSiteBtn}
              onClick={() => window.open(`https://mozzle.co.kr/`)}
            >
              모즐 소개 Site
            </Button>
            <AppStoreButton
              style={{ marginRight: 10 }}
              onClick={() =>
                window.open(`https://apps.apple.com/kr/app/id6446963035`)
              }
            />
            <GooglePlayButton
              onClick={() =>
                window.open(
                  `https://play.google.com/store/apps/details?id=com.dpc.mozzle`
                )
              }
            />
          </div>
        </>
      )}
      <p className={styles.explain}>
        모즐은 수많은 단체 모임을 위해 만들어진 {mobile && <br />}커뮤니티 APP
        서비스입니다.
        <br />
        기수 모임, 원우회(대학원) 모임, 골프 모임 등을 {mobile && <br />}
        편리하게 관리 및 운영 할 수 있고, {!mobile && <br />}
        번거로운 {mobile && <br />}회원 수첩도 APP에서 이용하는 서비스입니다.
      </p>
      <div className={styles.mozzleMainContainer}>
        <Image
          src={mobile ? mozzleBgM : mozzleBg}
          fill
          style={{ objectFit: "cover" }}
          alt="mozzle-bg"
        />
        <div className={styles.overlay}>
          <p className={styles.mozzleBoldFont}>
            모임별 불편한 종이수첩?
            <br />
            기수 모임은 MOZZLE
          </p>
          <p className={styles.goMozzle}>이제 모든 모임은 모즐로!</p>
          <p className={styles.mozzleSubFont}>
            대학원, 최고경영자과정,
            <br />
            골프, 기수모임 플랫폼
          </p>
        </div>
        <Image src={note} alt="mozzle-note" className={styles.mozzleNote} />
      </div>

      <div className={styles.mozzleSecondContainer}>
        <div className={styles.textContainer}>
          <p
            className={styles.mozzleBoldFont}
            style={{ marginBottom: mobile ? 16 : 0 }}
          >
            원우회, CEO 과정,
            <br />
            협회 모임 수첩을
            {!mobile && <br />}내 핸드폰으로!
          </p>
          <p className={styles.font22}>
            매년 회비로 모임 수첩을
            {!mobile && <br />}
            제작하는 번거로움을
            <br />
            모즐에서 한 번에 만들어
            {!mobile && <br />}
            평생 간직합니다.
          </p>
        </div>
        <div className={styles.mobileImageContainer}>
          <div className={`${styles.imageLeft}`}>
            <div className={styles.imageFrame}>
              <Image
                src={mozzle3}
                alt="mozzle_1"
                width={262}
                height={567}
                className={styles.mozzleImage}
              />
            </div>
          </div>
          <div className={`${styles.imageRight}`}>
            <div className={styles.imageFrame}>
              <Image
                src={mozzle4}
                alt="mozzle_1"
                width={262}
                height={567}
                className={styles.mozzleImage}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mozzleThirdContainer}>
        <p className={styles.mozzleBoldFont} style={{ textAlign: "center" }}>
          <span className={styles.emphasis}>기수 모임</span>을{" "}
          {mobile && <br />}편리하고 손쉽게!
        </p>
        <Row
          className={styles.conveniencesWrap}
          gutter={[0, { lg: 0, md: 48, sm: 48, xs: 48 }]}
        >
          {convenienceItems.map((item, index) => {
            return (
              <Col lg={6} md={12} sm={12} xs={12} key={index}>
                <div className={styles.convenience}>
                  <Image
                    src={item.icon}
                    width={mobile ? 62 : 100}
                    height={mobile ? 62 : 100}
                    alt="convi_icon"
                  />
                  <p>{item.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className={styles.mozzleFourthContainer}>
        <div className={styles.scheduleTextContainer}>
          <p
            className={styles.mozzleBoldFont}
            style={{ marginBottom: mobile ? 34 : 30 }}
          >
            골프 모임 스케줄,
            <br />
            스코어 관리도 손쉽게!
          </p>
          <p
            className={styles.font22}
            style={{ marginBottom: mobile ? 12 : 16 }}
          >
            참석자 관리, 편리한 조편성, 시상자 관리,
            <br />
            매월 라운딩 별 사진, 컨텐츠 관리
            <br />
          </p>
          <p className={styles.font22}>
            스코어 사진을 업로드하면 {mobile && <br />}회원 스코어부터
            {!mobile && <br />}
            누적 기록까지{mobile && <br />}한 번에 관리가 됩니다.
          </p>
        </div>
        <div className={styles.scheduleImageWrap}>
          <div className={styles.imageFrame}>
            <Image src={mozzle5} className={styles.mozzleImage} alt="mozzle5" />
          </div>
        </div>
      </div>

      <div className={styles.mozzleFifthContainer}>
        <p className={styles.mozzleBoldFont} style={{ textAlign: "center" }}>
          단체 <span className={styles.emphasis}>골프 모임</span> 관리를 즐겁게~
        </p>
        <Row className={styles.enjoyGolfWrap} gutter={[0, 72]}>
          {enjoyGolfItems.map((item, index) => {
            return (
              <Col lg={6} md={12} sm={12} xs={12} key={index}>
                <div className={styles.enjoyGolfItem}>
                  <div
                    className={styles.radiusBox}
                    style={{ background: item.color }}
                  >
                    <Image
                      src={item.icon}
                      width={item.width?.[mobile ? 1 : 0] || item?.width}
                      height={item.height?.[mobile ? 1 : 0] || item?.height}
                      alt="golf_icon"
                    />
                  </div>
                  <p>{item.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

import DelphicomModal from "@/app/(component)/_modal/DelphicomModal";
import { Button, Col, Flex, Row } from "antd";
import Image from "next/image";
import styles from "./PortfolioDetailModal.module.css";
import { Styles } from "@/util/CommonStyle";
import AppStoreButton from "@/app/(component)/_button/AppStoreButton";
import GooglePlayButton from "@/app/(component)/_button/GooglePlayButton";
import ArrowButton from "@/app/(component)/_button/ArrowButton";
import { useEffect, useState } from "react";
import _ from "lodash";
import useResponsive from "@/hook/useResponsive";
import DelphicomSlider from "@/app/(component)/_slider/DelphicomSlider";

export default function PortfolioDetailModal({ modal, onModal }) {
  const { mobile } = useResponsive();
  const {
    images,
    iosLink,
    andLink,
    webLink,
    description,
    mobileDescription,
    type,
  } = modal;
  const layout = {
    Application: {
      container: { maxWidth: 530, margin: "0 auto" },
      frame: { maxWidth: 290, height: 595 },
      photo: { width: 262, height: 567 },
      colSpan: [12, 12],
    },
    Website: {
      container: { maxWidth: 692, margin: "0 auto" },
      frame: { maxWidth: 572, height: 448 },
      photo: { width: 554, height: 420 },
      colSpan: [14, 10],
    },
  };
  const mobileLayout = {
    Application: {
      frame: { width: 190, height: 388 },
      photo: { width: 170, height: 368 },
    },
    Website: {
      frame: { width: 320, height: 250 },
      photo: { width: 304, height: 234 },
    },
  };

  const gotoLinkPage = (type) => {
    if (type === "IOS" && iosLink) window.open(iosLink);
    else if (type === "AND" && andLink) window.open(andLink);
    else if (type === "WEB" && webLink) window.open(webLink);
  };

  return (
    <DelphicomModal
      open={modal}
      setOpen={onModal}
      width={1280}
      centered
      footer={false}
      style={{ padding: 0 }}
      destroyOnClose
    >
      <Row className={styles.modalWrap} gutter={[56, 0]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={layout?.[type]?.colSpan?.[0] || 12}
          className={styles.columnWrap}
        >
          {/* 모바일 뷰 */}
          <DelphicomSlider
            images={images}
            containerStyle={layout?.[type]?.container}
            frameStyle={layout?.[type]?.frame}
            photoStyle={layout?.[type]?.photo}
            mobileFrameStyle={mobileLayout?.[type]?.frame}
            mobilePhotoStyle={mobileLayout?.[type]?.photo}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={layout?.[type]?.colSpan?.[1] || 12}
          style={Styles.rowVerticalCenter}
        >
          <div>
            <p className={styles.title}>{modal?.title}</p>
            <p className={styles.serviceType}>{type}</p>
            <Flex className={styles.btnRow}>
              {type === "Application" && (
                <>
                  <AppStoreButton
                    style={{ marginRight: 10 }}
                    onClick={() => gotoLinkPage("IOS")}
                  />
                  <GooglePlayButton onClick={() => gotoLinkPage("AND")} />
                </>
              )}
              {type === "Website" && (
                <Button
                  className={styles.gotoWebButton}
                  onClick={() => gotoLinkPage("WEB")}
                >
                  Go To Site
                </Button>
              )}
            </Flex>
            <p className={styles.contents}>
              {mobile && mobileDescription ? mobileDescription : description}
            </p>
          </div>
        </Col>
      </Row>
    </DelphicomModal>
  );
}

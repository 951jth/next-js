import DelphicomModal from "@/app/(component)/_modal/DelphicomModal";
import styles from "./DelphicomMapModal.module.css";
import { Col, Image as AntdImage, Row } from "antd";
import useResponsive from "@/hook/useResponsive";
import Image from "next/image";
import Script from "next/script";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

export default function DelphicomMapModal({ open, setOpen, ...others }) {
  const { mobile } = useResponsive();
  const KAKAO_SDK_URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JSKEY}&libraries=services,clusterer&autoload=false`;

  const KakaoMap = () => {
    return (
      <div className={{ width: "100%", height: mobile ? "56vh" : 544 }}>
        <Map
          center={{ lat: 37.4795130993704, lng: 126.887511773421 }}
          style={{ width: "100%", height: "544px" }}
        >
          <MapMarker
            position={{ lat: 37.4795130993704, lng: 126.887511773421 }}
          ></MapMarker>
          {/* <CustomOverlayMap
            position={{ lat: 37.4795130993704, lng: 126.887511773421 }}
          >
            <span>test</span>
          </CustomOverlayMap> */}
        </Map>
      </div>
    );
  };

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <DelphicomModal
        width={1280}
        footer={false}
        open={open}
        setOpen={setOpen}
        classNames={{ content: styles.padding0 }}
        centered={mobile}
      >
        {mobile ? (
          <>
            <Row className={styles.mobileContainer}>
              <Col span={24}>
                <KakaoMap />
              </Col>
              <Col span={24} className={styles.mobileContents}>
                <p className={styles.address}>Address</p>
                <p className={styles.location}>
                  08512 서울특별시 금천구 디지털로9길 32, B동 1504호
                </p>
                <p className={styles.callNumber}>02-3397-7880</p>
              </Col>
            </Row>
          </>
        ) : (
          <Row className={styles.container} gutter={[0, 40]}>
            <Col xs={24} sm={24} md={24} lg={5}>
              <span className={styles.address}>Address</span>
            </Col>
            <Col xs={24} sm={24} md={24} lg={19}>
              <p className={styles.location}>
                08512 서울특별시 금천구 디지털로9길 32, B동 1504호
              </p>
              <p className={styles.callNumber}>02-3397-7880</p>
            </Col>
            <Col span={24}>
              <KakaoMap />
            </Col>
          </Row>
        )}
      </DelphicomModal>
    </>
  );
}

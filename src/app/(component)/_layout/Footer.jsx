"use client";
import { Flex, Select } from "antd";
import styles from "./Footer.module.css";
import Image from "next/image";
import DelphicomSelect from "../_select/DelphicomSelect";
import { isMobile } from "@/util/Responsive";
import useResponsive from "@/hook/useResponsive";

export default function Footer() {
  const { mobile } = useResponsive();
  const options = [
    { label: "050 비즈콜", value: "https://www.050bizcall.co.kr/" },
    { label: "MOZZLE", value: "https://www.mozzle.co.kr/" },
  ];
  return (
    <div className={styles.footerWrap}>
      {mobile ? (
        <div className={styles.mobile}>
          <Flex justify="space-between">
            <div>
              <Image
                src={"/assets/icons/delphicom_color.svg"}
                width={82}
                height={40}
                alt="logo"
                style={{ marginBottom: 28 }}
              />
            </div>
            <div>
              <DelphicomSelect
                style={{ width: "170px" }}
                options={options}
                placeholder="Family Site"
                onSelect={(e) => window.open(e)}
                value={null}
              />
            </div>
          </Flex>
          <p className={styles.trust}>
            델피콤은 개발 후 서비스 운영과 <br />
            마케팅 경험까지 공유해 드립니다.
          </p>
          <p>
            델피콤㈜
            <span className={styles.division} />
            대표이사 이대형
          </p>
          <p>
            서울특별시 금천구 디지털로9길 32, B동 1504호 &nbsp;
            <span className={styles.clickable}>지도보기</span>
          </p>
          <p>
            02-3397-7880
            <span className={styles.division} />
            Fax 0303-3444-2377
            <span className={styles.division} />
            info@delphicom.net
          </p>
          <p className={styles.copyright}>
            Copyright©by Delphicom. all rights reserved.
          </p>
        </div>
      ) : (
        <Flex justify={"space-between"}>
          <div className={styles.col}>
            <Image
              src={"/assets/icons/delphicom_color.svg"}
              width={82}
              height={40}
              alt="logo"
              style={{ marginBottom: 28 }}
            />
            <p>
              델피콤은 개발 후 서비스 운영과 <br />
              마케팅 경험까지 공유해 드립니다.
            </p>
          </div>
          <div className={`${styles.col} ${styles.company}`}>
            <p>
              델피콤㈜
              <span className={styles.division} />
              대표이사 이대형
            </p>
            <p>
              서울특별시 금천구 디지털로9길 32, B동 1504호 &nbsp;
              <span className={styles.clickable}>지도보기</span>
            </p>
            <p>
              02-3397-7880
              <span className={styles.division} />
              Fax 0303-3444-2377
              <span className={styles.division} />
              info@delphicom.net
            </p>
            <p className={styles.copyright}>
              Copyright©by Delphicom. all rights reserved.
            </p>
          </div>
          <div className={styles.col}>
            <DelphicomSelect
              style={{ width: "170px" }}
              options={options}
              placeholder="Family Site"
              onSelect={(e) => window.open(e)}
              value={null}
            />
          </div>
        </Flex>
      )}
    </div>
  );
}

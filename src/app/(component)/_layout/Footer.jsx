import { Flex, Select } from "antd";
import styles from "./Footer.module.css";
import Image from "next/image";
import DelphicomSelect from "../_select/DelphicomSelect";

export default function Footer() {
  const options = [
    { label: "050 비즈콜", value: "biz" },
    { label: "MOZZLE", value: "mozzle" },
  ];
  return (
    <div className={styles.footerWrap}>
      <Flex justify="space-between">
        <div>
          <img
            src={"/assets/icons/delphicom_color.png"}
            width={82}
            alt="logo"
          />
          <p>
            델피콤은 개발 후 서비스 운영과 <br />
            마케팅 경험까지 공유해 드립니다.
          </p>
        </div>
        <div>
          <p>
            델피콤㈜
            <span className={styles.division} />
            대표이사 이대형 <br />
            서울특별시 금천구 디지털로9길 32, B동 1504호 &nbsp;
            <span className={styles.clickable}>지도보기</span> <br />
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
        <div>
          <DelphicomSelect
            style={{ width: "170px" }}
            options={options}
            placeholder="Family Site"
          />
        </div>
      </Flex>
    </div>
  );
}

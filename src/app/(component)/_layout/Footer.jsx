import { Flex } from "antd";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footerWrap}>
      <Flex justify="space-between">
        <div>
          <Image
            src={"/assets/images/delphicom_logo.jpg"}
            width={100}
            height={60}
          />
          <p>
            서울특별시 금천구 디지털로9길 32,B동 1504호 <br />
            (가산동,갑을그레이트밸리) 대표전화:02)3397-7880 / FAX:0303)3444-2377
            <br />
            상호명:델피콤㈜ / 대표이사: 이대형
            <br /> Copyright©by Delphicom.all rights reserved.
          </p>
        </div>
        <div>
          <p>문의</p>
          <p>
            전화번호 : 02)3397-7880 <br /> 이메일 : info@delphicom.net
          </p>
        </div>
      </Flex>
    </div>
  );
}

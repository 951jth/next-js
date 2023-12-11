"use client";
import { menus } from "@/menus/menus";
import { Button, Col, Menu, Row } from "antd";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import logo from "@icons/delphicom.png";
import colorLogo from "@icons/delphicom_color.png";
import Image from "next/image";
import { Styles } from "@/util/CommonStyle";
import RoundButton from "../_button/RoundButton";

export default function Header(props) {
  const { isBackColor } = props;
  const router = useRouter();

  return (
    <div className={`${styles.header} ${isBackColor ? styles.backColor : ""}`}>
      <Row justify={"space-between"} className={styles.rowWrap}>
        <Col span={4} style={Styles.rowVerticalCenter}>
          <Image
            src={isBackColor ? colorLogo : logo}
            width={92}
            height={40}
            style={{ zIndex: 2 }}
            alt="logo"
          />
        </Col>
        <Col span={20} className={styles.navigation}>
          <Menu
            items={[
              ...menus,
              {
                label: (
                  <RoundButton
                    text="제작문의"
                    buttonStyle={{ color: isBackColor ? "#000000" : "#888888" }}
                  />
                ),
              },
            ]}
            mode="horizontal"
            onSelect={(key) => {
              const path = key?.item?.props?.path;
              // path && router.push(path);
            }}
            className={styles.topMenu}
          ></Menu>
        </Col>
      </Row>
    </div>
  );
}

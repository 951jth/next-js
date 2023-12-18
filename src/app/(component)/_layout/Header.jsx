"use client";
import { menus } from "@/menus/menus";
import { Button, Col, Menu, Row } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "@icons/delphicom.svg";
import colorLogo from "@icons/delphicom_color.svg";
import menu from "@icons/menu.svg";
import menuColor from "@icons/menuColor.svg";
import close from "@icons/close.svg";
import RoundButton from "../_button/RoundButton";
import { Styles } from "@/util/CommonStyle";
import { use, useEffect, useState } from "react";
import { isMobile } from "@/util/Responsive";

export default function Header(props) {
  const { isBackColor, setIsBackColor } = props;
  const router = useRouter();
  const pathname = usePathname();
  const [menuOn, setMenuOn] = useState(false);
  const [menuRef, setMenuRef] = useState(null);
  const [mounted, setMounted] = useState(false);
  const movePage = (path) => {
    router.push(`/intro/${path}`);
  };
  const moveMain = () => {
    router.push("/intro");
  };
  const isMob = isMobile();
  const backColor = isBackColor || menuOn;

  const InquiryButton = () => {
    return (
      <RoundButton
        text="제작문의"
        color="#555555"
        backColor={backColor ? "#555555" : "#ffffff"}
        buttonStyle={{
          color: backColor ? "#FFFFFF" : "#888888",
        }}
        onClick={() => movePage("inquiry")}
      />
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsBackColor(pathname !== "/intro");
  }, [pathname]);

  useEffect(() => {
    const handleOutClick = (e) => {
      if (!menuRef?.contains(e?.target)) setMenuOn(false);
    };
    window.addEventListener("click", handleOutClick);
    return () => window.removeEventListener("click", handleOutClick);
  }, [menuRef]);

  return (
    <div
      className={`${styles.header} ${backColor ? styles.backColor : ""}`}
      ref={setMenuRef}
    >
      <Row justify={"space-between"} className={styles.rowWrap}>
        <Col span={4} style={Styles.rowVerticalCenter}>
          <Image
            src={backColor ? colorLogo : logo}
            width={92}
            height={40}
            style={{ zIndex: 2, cursor: "pointer" }}
            alt="logo"
            onClick={moveMain}
          />
        </Col>

        <Col span={20} className={styles.mobileButtons}>
          <InquiryButton />
          <Button
            icon={
              <Image
                src={menuOn ? close : isBackColor ? menuColor : menu}
                alt="menu"
                width={20}
                height={14}
              />
            }
            type="text"
            style={{ marginLeft: 15 }}
            onClick={() => setMenuOn(!menuOn)}
          />
        </Col>
        <Col span={20} className={styles.navigation}>
          <Menu
            items={[
              ...menus,
              {
                label: <InquiryButton />,
                key: "/intro/inquiry",
              },
            ]}
            mode="horizontal"
            onSelect={(key) => {
              const path = key?.item?.props?.path;
              // path && router.push(path);
            }}
            className={styles.topMenu}
            selectedKeys={pathname}
          ></Menu>
        </Col>
      </Row>
      <>
        {/* <style jsx global>
            {`
              @keyframes showDown {
                from {
                  height: 0px;
                  color: unset;
                }
                to {
                  height: 237px;
                }
              }
              .showDown {
                animation: showDown 0.5s;
              }
            `}
          </style> */}
        <div className={`${styles.mobileMenu} ${menuOn ? styles.menuOn : ""}`}>
          {menus.map((item) => (
            <div
              span={24}
              className={`${styles.mobileMenuRow} ${
                item?.key === pathname ? styles.mobileMenuActive : ""
              }`}
              key={item?.key}
            >
              <span>{item?.label}</span>
            </div>
          ))}
        </div>
      </>
      {/* )} */}
    </div>
  );
}

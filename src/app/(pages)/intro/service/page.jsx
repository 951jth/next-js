"use client";

import { useState } from "react";
import BizcallServiceTab from "./_component/BizcallServiceTab";
import styles from "./page.module.css";
import DelphicomSwitch from "@/app/(component)/_slider/DelphicomSwitch";
import MozzleServiceTab from "./_component/MozzleServiceTab";
import Head from "next/head";
export default function IntroServicePage() {
  const [tab, setTab] = useState(false); // true: 모즐, false: 비즈콜

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/src/app/favicon_48.png" />
      </Head>
      <div className={styles.container}>
        <p className={styles.title}>자사서비스</p>
        <DelphicomSwitch
          checkChilren="모즐"
          unCheckedChildren="050비즈콜"
          className={styles.switchTab}
          setChecked={setTab}
        />
        <div className={styles.tabContainer}>
          {!tab && <BizcallServiceTab />}
          {tab && <MozzleServiceTab />}
        </div>
      </div>
    </>
  );
}

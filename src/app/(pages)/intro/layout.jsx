"use client";
import styles from "./layout.module.css";
import Footer from "@/app/(component)/_layout/Footer";
import Header from "@/app/(component)/_layout/Header";
import delBg from "@assets/images/delphicom_bg.png";
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import _ from "lodash";

export default function IntroLayout({ children }) {
  const [isBackColor, setIsBackColor] = useState(false);
  // const childrenMemo = useMemo(() => children, [children]);
  const onScroll = useCallback((e) => {
    const { scrollTop } = e?.currentTarget;
    if (scrollTop >= 150) setIsBackColor(true);
    else setIsBackColor(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contents} onScroll={onScroll}>
        <Header isBackColor={isBackColor} />
        {/* <div className={styles.bgHeader}>
          <Image
            src={delBg}
            // className={styles.bgImage}
            alt="bg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div> */}
        {children}
        <Footer />
      </div>
    </div>
  );
}

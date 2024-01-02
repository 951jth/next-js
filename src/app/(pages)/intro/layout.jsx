"use client";
import styles from "./layout.module.css";
import Footer from "@/app/(component)/_layout/Footer";
import Header from "@/app/(component)/_layout/Header";
import delBg from "@assets/images/delphicom_bg.png";
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import _ from "lodash";
import { usePathname } from "next/navigation";

export default function IntroLayout({ children }) {
  const pathname = usePathname();
  const [isBackColor, setIsBackColor] = useState(pathname !== "/intro");
  const [isShadow, setIsShadow] = useState(false);

  const onScroll = useCallback(
    (e) => {
      const { scrollTop } = e?.currentTarget;
      if (pathname !== "/intro" || scrollTop >= 150) setIsBackColor(true);
      else setIsBackColor(false);

      //헤더 쉐도우 추가
      if (scrollTop === 0) setIsShadow(false);
      else setIsShadow(true);
    },
    [pathname]
  );

  // const childrenCallback = useCallback(() => {
  //   return children;
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contents} onScroll={onScroll}>
        <Header
          isBackColor={isBackColor}
          setIsBackColor={setIsBackColor}
          isShadow={isShadow}
        />
        {children}
        <Footer />
      </div>
    </div>
  );
}

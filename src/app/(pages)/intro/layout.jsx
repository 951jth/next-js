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

  const onScroll = useCallback(
    (e) => {
      const { scrollTop } = e?.currentTarget;
      if (pathname !== "/intro" || scrollTop >= 150) setIsBackColor(true);
      else setIsBackColor(false);
    },
    [pathname]
  );

  // const childrenCallback = useCallback(() => {
  //   return children;
  // }, []);

  return (
    <div className={styles.container}>
      {/* <Head>
        <title>{title || "정리습관"}</title>
        <meta
          name="description"
          content={
            description ||
            "집정리가 필요한 고객에게 정리전문가를 연결하고 정리습관을 만드는 대표 집정리 플랫폼 클린테크 기업"
          }
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title || "정리습관"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url || "https://jungleehabit.com"} />
        <meta property="og:image" content={image} />
        <meta property="og:article:author" content="정리습관" />
      </Head> */}

      <div className={styles.contents} onScroll={onScroll}>
        <Header isBackColor={isBackColor} setIsBackColor={setIsBackColor} />
        {children}
        <Footer />
      </div>
    </div>
  );
}

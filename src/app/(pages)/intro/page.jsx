"use client";
import TopSection from "./_component/TopSection";
import ProductSection from "./_component/ProductSection";
import ReasonSection from "./_component/ReasonSection";
import PortfolioSection from "./_component/PortfolioSection";
import ProcessSection from "./_component/ProcessSection";
import delBg from "@assets/images/delphicom_bg.png";
import mobDelBg from "@images/mobDelphicomBg.png";
import Image from "next/image";
import Head from "next/head";
import { isMobile } from "@/util/Responsive";
import { useEffect, useState } from "react";
import useResponsive from "@/hook/useResponsive";

export default function introMain() {
  const { mobile } = useResponsive();
  // const isMob = isMobile();
  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   isMob && setMobile(true);
  // }, [isMob]);

  return (
    <>
      <style jsx>
        {`
          .bgImage {
            width: 100%;
            height: 800px;
            position: absolute;
            top: 0;
          }
        `}
      </style>
      <div className={"bgImage"}>
        <Image
          src={mobile ? mobDelBg : delBg}
          alt="delphicom-bg"
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <TopSection />
      <ProductSection />
      <ReasonSection />
      <PortfolioSection />
      <ProcessSection />
    </>
  );
}

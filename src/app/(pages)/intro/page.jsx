"use client";
import TopSection from "./_component/TopSection";
import ProductSection from "./_component/ProductSection";
import ReasonSection from "./_component/ReasonSection";
import PortfolioSection from "./_component/PortfolioSection";
import ProcessSection from "./_component/ProcessSection";
import delBg from "@assets/images/delphicom_bg.png";
import Image from "next/image";

export default function introMain() {
  return (
    <>
      <style jsx>
        {`
          .bgHeader {
            width: 100%;
            height: 720px;
            position: absolute;
            top: 0;
          }
        `}
      </style>
      <div className={"bgHeader"}>
        <Image
          src={delBg}
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
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

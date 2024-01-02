import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

export default function Home() {
  const KAKAO_SDK_URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JSKEY}&libraries=services,clusterer&autoload=false`;

  return (
    <>
      {/* <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JSKEY}&libraries=services,clusterer`}
      /> */}
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />

      <Head>
        <title>델피콤 홈페이지에 오신것을 환영 합니다.</title>
        <meta
          name="description"
          content="제작문의를 주시면 성심성의 것 답변 해드리겠습니다."
          key="desc"
        />
      </Head>
      <Image src={"./favicon_48.png"} alt="favicon" width={40} height={40} />
      <ConfigProvider theme={theme}>
        <SessionProvider>
          <main className={styles.main}>로딩 중 입니다...</main>
        </SessionProvider>
      </ConfigProvider>
    </>
  );
}

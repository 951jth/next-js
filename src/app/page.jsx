import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>델피콤 홈페이지에 오신것을 환영 합니다.</title>
        <meta
          name="description"
          content="제작문의를 주시면 성심성의 것 답변 해드리겠습니다."
          key="desc"
        />
      </Head>
      <main className={styles.main}>로딩 중 입니다...</main>
    </>
  );
}

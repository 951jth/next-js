"use client";
import useResponsive from "@/hook/useResponsive";
import styles from "./TopSection.module.css";
import RoundButton from "@/app/(component)/_button/RoundButton";
import { useRouter } from "next/navigation";

export default function TopSection() {
  const { mobile } = useResponsive();
  const router = useRouter();
  return (
    <div className={styles.delphicomBg}>
      {mobile ? (
        <>
          <p className={styles.emphasis}>
            구체적인 기획, 내용이 없어도
            <br />
            괜찮습니다.
          </p>
          <p>
            WEB, APP, 플랫폼 개발부터
            <br /> 기획, 디자인까지 <br />
            <span className={styles.emphasis}>20년의 경험과 노하우</span>로
            <br />
            여러분의 아이디어를 <br />
            최고의 퀄리티로 제작해 드립니다.
          </p>
        </>
      ) : (
        <>
          <p className={styles.emphasis}>
            구체적인 기획, 내용이 없어도 괜찮습니다.
          </p>
          <p>
            WEB, APP, 플랫폼 개발부터 기획, 디자인까지 <br />
            <span className={styles.emphasis}>20년의 경험과 노하우</span>로
            <br />
            여러분의 아이디어를 <br />
            최고의 퀄리티로 제작해 드립니다.
          </p>
        </>
      )}
      <RoundButton
        text={"제작문의"}
        fontSize={16}
        width={160}
        height={50}
        fontColor={"#FFFFFF"}
        onClick={() => router.push(`/intro/inquiry`)}
        ghost
      />
    </div>
  );
}

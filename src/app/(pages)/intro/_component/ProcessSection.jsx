"use client";
import React, { useEffect, useState } from "react";
import styles from "./ProcessSection.module.css";
import arrow from "@icons/arrowShadow.png";
import activeArrow from "@icons/arrowShadowOn.png";
import Image from "next/image";
import inquiry from "@icons/inquiry.png";
import contract from "@icons/contract.png";
import plan from "@icons/plan.png";
import frame from "@icons/frame.png";
import design from "@icons/design.png";
import development from "@icons/development.png";
import repair from "@icons/repair.png";
import _ from "lodash";
import { Styles } from "@/util/CommonStyle";
import { isMobile } from "@/util/Responsive";
import useResponsive from "@/hook/useResponsive";

export default function ProcessSection() {
  const [process, setProcess] = useState(0);
  const { mobile } = useResponsive();
  const processItems = [
    { label: "문의/상담", key: 0, url: inquiry },
    { label: "계약 진행", key: 1, url: contract },
    { label: "요구사항&기획", key: 2, url: plan },
    { label: "와이어프레임", key: 3, url: frame },
    { label: "디자인", key: 4, url: design },
    { label: "개발", key: 5, url: development },
    { label: "유지보수", key: 6, url: repair },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProcess((old) => {
        const number = _.cloneDeep(old) + 1;
        if (number === 3 && mobile) return 4;
        else return number > 6 ? 0 : number;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [mobile]);

  const Process = React.memo((props) => {
    const { label, url, isActive, index } = props;
    //모바일의 경우 그냥 빈 div만 생성
    if (index === 3 && mobile)
      return <div className={styles.process} style={{ display: "none" }} />;
    else
      return (
        <div className={styles.process}>
          <div className={`${styles.round}`}>
            <Image
              src={url}
              alt="process"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 33%"
            />
          </div>
          <div className={styles.line}>
            <div className={styles.point} />
            <div
              className={`${styles.selected} 
              ${isActive ? "selectOn" : ""}
              `}
            />
          </div>
          <div className={styles.arrowWrap}>
            <div
              className={`${styles.arrowLabel} ${
                isActive ? styles.arrowBold : null
              }`}
            >
              <p>{label}</p>
            </div>
            <Image
              src={isActive ? activeArrow : arrow}
              alt="arrow"
              className={styles.arrow}
            />
          </div>
        </div>
      );
  });

  return (
    <div className={styles.container}>
      <style jsx global>
        {`
          @keyframes seletUp {
            0% {
              background-color: unset;
            }
            100% {
              background-color: "#1397ed80";
            }
          }
          .selectOn {
            animation: seletUp 0.5s;
            background: #1397ed30;
          }
        `}
      </style>
      <p className="section-title">제작단계</p>
      <p
        className="section-description"
        style={{ maxWidth: mobile ? 320 : 680, margin: "0 auto" }}
      >
        다년간의 경험이 있는 개발 전문 회사로 기획부터 참여하여 <br />
        고객사와 유저 모두를 만족할 수 있는 앱을 제작합니다.
      </p>
      <div className={styles.processWrap}>
        {processItems.map((item) => {
          return (
            <Process
              label={item?.label}
              url={item.url}
              key={item?.key}
              index={item.key}
              isActive={item?.key === process}
            />
          );
        })}
      </div>
    </div>
  );
}

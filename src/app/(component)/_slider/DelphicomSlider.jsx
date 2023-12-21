import useResponsive from "@/hook/useResponsive";
import styles from "./DelphicomSlider.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowButton from "../_button/ArrowButton";
import { Flex } from "antd";

export default function DelphicomSlider({
  images = [],
  containerStyle = { maxWidth: 530, margin: "0 auto" },
  frameStyle = { maxWidth: 290, height: 595 },
  photoStyle = { width: 262, height: 567 },
  mobileFrameStyle = { maxWidth: 190, height: 388 },
  mobilePhotoStyle = { width: 170, height: 368 },
}) {
  const { mobile } = useResponsive();
  const [showNum, setShowNum] = useState(0); //현재 슬라이더 보이는 번호
  const [slideRef, setSlideRef] = useState(null);
  const startPoint = useRef(); //슬라이더 터치 시작지점
  const scrollLeft = useRef(0); //현재 슬라이더 scroll x
  //슬라이더 번호 세팅 최대 이미지보다 크거나 0보다 작을시 번호이동, (PC)
  const countNumber = (num) => {
    setShowNum((old) => {
      let value = 0;
      const current = old + num;
      if (current > images?.length - 1) {
        value = 0;
      } else if (current < 0) value = images.length - 1;
      else {
        value = current;
      }
      return value;
    });
  };

  const moveSlider = () => {
    let left = mobile ? mobilePhotoStyle?.width + 40 : photoStyle?.width;
    slideRef.scrollTo({ top: 0, left: showNum * left, behavior: "smooth" });
    scrollLeft.current = showNum * left;
  };

  //   // 오토 스크롤 (필요시 사용)
  //   useEffect(() => {
  //     let timer = null;
  //     if (images) {
  //       timer = setInterval(() => {
  //         console.log(startPoint?.current);
  //         !startPoint?.current && countNumber(1);
  //       }, 3000);
  //     }
  //     return () => {
  //       clearInterval(timer);
  //       setShowNum(0);
  //     };
  //   }, [images]);

  useEffect(() => {
    const touchStart = (e) => {
      const point = e?.touches?.[0]?.pageX;
      startPoint.current = point;
    };

    const touchEnd = (e) => {
      let moveNumber;
      const left = scrollLeft?.current || 0;
      const endPoint = e?.changedTouches?.[0]?.pageX;
      const lastIndex = images?.length - 1;
      //   console.log("left", left);
      //   console.log("startPoint", startPoint?.current);
      //   console.log("endPoint", endPoint);
      const move = left + (startPoint?.current - endPoint);
      moveNumber = Math.round(move / (mobilePhotoStyle?.width + 20));
      if (moveNumber > lastIndex) moveNumber = lastIndex;
      if (moveNumber < 0) moveNumber = 0;
      if (moveNumber === showNum) return moveSlider();
      else setShowNum(moveNumber);
      startPoint.current = null;
    };
    const touchMove = (e) => {
      if (startPoint?.current) {
        const left = scrollLeft?.current || 0;
        const point = e?.changedTouches?.[0]?.pageX;
        const move = point - startPoint?.current;
        if (showNum >= images?.length - 1 && move < 0) return;
        slideRef.scrollTo({
          top: 0,
          left: left - move,
        });
      }
    };
    if (slideRef) {
      moveSlider();
      if (!mobile) return;
      slideRef?.addEventListener("touchstart", touchStart);
      slideRef?.addEventListener("touchmove", touchMove);
      slideRef?.addEventListener("touchend", touchEnd);
    }
    return () => {
      if (!mobile) return;
      slideRef?.removeEventListener("touchstart", touchStart);
      slideRef?.removeEventListener("touchmove", touchMove);
      slideRef?.removeEventListener("touchend", touchEnd);
    };
  }, [slideRef, showNum, mobile]);

  return (
    <>
      {mobile ? (
        <div className={styles.mobileContainer}>
          <div className={styles.imageFrame} style={mobileFrameStyle}></div>
          <div
            className={styles.scrollContainer}
            ref={setSlideRef}
            style={{
              padding: `0 calc(50vw - ${
                Math.ceil(mobileFrameStyle?.width / 2) - 2
              }px)`,
            }}
          >
            {images?.map((src, index) => {
              return (
                <div
                  className={styles.photo}
                  key={index}
                  style={mobilePhotoStyle}
                >
                  <Image
                    src={src}
                    fill
                    id={`slide_${index}`}
                    alt={`slide-${index}`}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.pointsWrap}>
            {images?.map((src, index) => {
              return (
                <div
                  className={`${styles.point} ${
                    showNum === index ? styles.pointActive : null
                  }`}
                  key={index}
                ></div>
              );
            })}
          </div>
        </div>
      ) : (
        <div style={containerStyle}>
          <Flex justify="space-between" className={styles.slideContainer}>
            <div>
              <ArrowButton
                onClick={() => countNumber(-1)}
                className={styles.arrowButton}
              />
            </div>
            <div>
              <div className={styles.imageFrame} style={frameStyle}>
                <div className={styles.scrollContainer} ref={setSlideRef}>
                  {images?.map((src, index) => {
                    return (
                      <div
                        className={styles.photo}
                        key={index}
                        style={photoStyle}
                      >
                        <Image
                          src={src}
                          fill
                          id={`slide_${index}`}
                          alt={`slide-${index}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <ArrowButton
                direction="right"
                onClick={() => countNumber(1)}
                className={styles.arrowButton}
              />
            </div>
          </Flex>
          <div className={styles.pointsWrap}>
            {images?.map((src, index) => {
              return (
                <div
                  className={`${styles.point} ${
                    showNum === index ? styles.pointActive : null
                  }`}
                  key={index}
                ></div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

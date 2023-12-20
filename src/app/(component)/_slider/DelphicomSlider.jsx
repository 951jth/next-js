import useResponsive from "@/hook/useResponsive";
import styles from "./DelphicomSlider.module.css";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const [showNum, setShowNum] = useState(0);
  const [slideRef, setSlideRef] = useState(null);
  const startPoint = useRef();
  const scrollLeft = useRef(0);

  const touchStart = useCallback((e) => {
    const point = e?.touches?.[0]?.pageX;
    startPoint.current = point;
  }, []);

  const moveSlide = (num) => {
    setShowNum((old) => {
      const current = old + num;
      if (current > images?.length - 1) {
        return 0;
      } else if (current < 0) return images.length - 1;
      else {
        return current;
      }
    });
  };

  //   useEffect(() => {
  //     let timer = null;
  //     if (images) {
  //       timer = setInterval(() => {
  //         console.log(startPoint?.current);
  //         !startPoint?.current && moveSlide(1);
  //       }, 3000);
  //     }
  //     return () => {
  //       clearInterval(timer);
  //       setShowNum(0);
  //     };
  //   }, [images]);

  useEffect(() => {
    // const touchStart = (e) => {
    //   const point = e?.touches?.[0]?.pageX;
    //   startPoint.current = point;
    // };
    // const touchEnd = (e) => {
    //   if (showNum >= images?.length - 1) return;
    //   const point = e?.changedTouches?.[0]?.pageX;
    //   const harf = mobileFrameStyle?.width / 2;
    //   const move = point - startPoint?.current;
    //   console.log(harf);
    //   console.log(move);
    //   if (move > harf && showNum !== 0) moveSlide(-1);
    //   else if (-move > harf && !(showNum >= images?.length - 1)) moveSlide(1);
    //   startPoint.current = null;
    // };

    if (slideRef) {
      let left = mobile ? mobilePhotoStyle?.width + 40 : photoStyle?.width;
      slideRef.scrollTo({ top: 0, left: showNum * left, behavior: "smooth" });
      scrollLeft.current = showNum * left;
    }
  }, [showNum, slideRef]);

  useEffect(() => {
    // const touchStart = (e) => {
    //   //   if (showNum >= images?.length - 1) return;
    //   const point = e?.touches?.[0]?.pageX;
    //   console.log(e);
    //   console.log("start", point);
    //   startPoint.current = point;
    // };
    // const touchEnd = (e) => {
    //   //   if (showNum >= images?.length - 1) return;
    //   const point = e?.changedTouches?.[0]?.pageX;
    //   const harf = mobileFrameStyle?.width / 2;
    //   const move = point - startPoint?.current;
    //   console.log(harf);
    //   console.log(move);
    //   if (move > harf) moveSlide(1);
    // };
    // if (slideRef) {
    //   slideRef?.addEventListener("touchstart", touchStart);
    //   slideRef?.addEventListener("touchend", touchEnd);
    // }
    // return () => {
    //   slideRef?.removeEventListener("touchstart", touchStart);
    //   slideRef?.removeEventListener("touchend", touchEnd);
    // };
    const touchEnd = (e) => {
      console.log(images);
      const lastIndex = images.length - 1;
      const left = _.cloneDeep(scrollLeft?.current || 0);
      const endPoint = e?.changedTouches?.[0]?.pageX;
      const harf = mobileFrameStyle?.width / 2;
      //   console.log(point);
      console.log("left", left);
      console.log("startPoint", startPoint?.current);
      console.log("endPoint", endPoint);
      const move = left + (startPoint?.current - endPoint);
      //   console.log("move", move);
      const moveNumber = Math.round(move / mobilePhotoStyle?.width);
      console.log(moveNumber);
      if (moveNumber >= images?.length - 1) return console.log("return");
      setShowNum(moveNumber);
      startPoint.current = null;
      //   console.log(moveNumber);
    };
    const touchMove = (e) => {
      if (startPoint?.current) {
        const left = scrollLeft?.current || 0;
        const point = e?.changedTouches?.[0]?.pageX;
        const move = point - startPoint?.current;
        slideRef.scrollTo({
          top: 0,
          left: left - move,
        });
      }
    };
    if (slideRef) {
      //   let left = mobile ? mobilePhotoStyle?.width + 40 : photoStyle?.width;
      slideRef?.addEventListener("touchstart", touchStart);
      slideRef?.addEventListener("touchmove", touchMove);
      slideRef?.addEventListener("touchend", touchEnd);
    }
    return () => {
      slideRef?.removeEventListener("touchstart", touchStart);
      slideRef?.removeEventListener("touchmove", touchMove);
      slideRef?.removeEventListener("touchend", touchEnd);
    };
  }, [slideRef]);

  return (
    <>
      {mobile ? (
        <div className={styles.mobileContainer}>
          {/* <div className={styles.slideContainer}> */}
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
          {/* </div> */}
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
                onClick={() => moveSlide(-1)}
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
                onClick={() => moveSlide(1)}
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

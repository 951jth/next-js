import iconLeft from "@icons/leftArrow.png";
import { Button } from "antd";
import Image from "next/image";
import { LeftOutlined } from "@ant-design/icons";

export default function ArrowButton({ direction, className, ...others }) {
  return (
    <>
      <style jsx global>{`
        .arrowButtonWrap {
          height: 38px;
        }
        .arrowImage {
          width: 30px;
          height: 30px;
          border: 1px;
        }
      `}</style>
      <Button
        {...others}
        icon={
          <Image
            src={iconLeft}
            alt="arrow-left"
            className="arrowImage"
            style={{
              transform: `rotate(${
                direction === "right" ? "-180deg" : "unset"
              })`,
            }}
          />
        }
        type="text"
        className={`arrowButtonWrap ${className}`}
      ></Button>
    </>
  );
}

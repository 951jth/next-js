import { Button } from "antd";
import Image from "next/image";
import googlePlay from "@icons/googlePlay.png";

export default function GooglePlayButton({
  width = "120px",
  height = "40px",
  fontSize = "14px",
  style,
  ...others
}) {
  return (
    <>
      <style jsx global>
        {`
          .googleButton {
            width: ${width};
            height: ${height};
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            font-size: ${fontSize};
            box-shadow: "0px 4px 15px 0px #0000000F";
            padding: 0;
            justify-content: center;
            font-family: Roboto;
            font-weight: 550;
            line-height: 14px;
            letter-spacing: -0.01em;
            font-variation-settings: "wdth" 100;
          }
        `}
      </style>
      <Button
        style={style}
        {...others}
        icon={<Image src={googlePlay} alt="app-store" width={15} height={18} />}
        className="googleButton"
      >
        Google Play
      </Button>
    </>
  );
}

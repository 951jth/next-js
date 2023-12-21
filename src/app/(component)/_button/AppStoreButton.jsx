import { Button } from "antd";
import Image from "next/image";
import appStore from "@icons/appStore.png";

export default function AppStoreButton({
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
          .appButton {
            width: ${width};
            height: ${height};
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            font-size: ${fontSize};
            box-shadow: 0px 4px 15px 0px #0000000f;
            padding: 0;
            justify-content: center;
            font-family: Roboto;
            font-weight: 400;
            line-height: 14px;
            letter-spacing: -0.01em;
            font-variation-settings: "wdth" 100;
          }
        `}
      </style>
      <Button
        {...others}
        style={style}
        icon={<Image src={appStore} alt="app-store" width={15} height={18} />}
        className="appButton"
      >
        App Store
      </Button>
    </>
  );
}

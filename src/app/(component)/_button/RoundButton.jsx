import { Button, theme } from "antd";

export default function RoundButton({
  text,
  height,
  width,
  fontSize,
  fontColor,
  buttonStyle,
  textStyle,
  ...others
}) {
  const config = theme.useToken().token;
  return (
    <>
      <Button
        {...others}
        className="custom-button"
        style={{
          width: width || "92px",
          height: height || "30px",
          borderRadius: "30px",
          fontSize: fontSize || "14px",
          fontWeight: 550,
          lineHeight: "14px",
          letterSpacing: "-0.01em",
          ...buttonStyle,
        }}
      >
        <style jsx global>
          {`
            button span:hover {
              color: ${config.colorPrimary} !important;
            }
          `}
        </style>
        {text || "-"}
      </Button>
    </>
  );
}

//   .button {
//     width: ${width || "92px"} !important,
//     height: ${height || "30px"} !important,
//     borderRadius: 30px !important,
//     ...${buttonStyle}
//   }

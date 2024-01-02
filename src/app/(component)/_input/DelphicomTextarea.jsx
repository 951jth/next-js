import { Input } from "antd";
import { useEffect, useState } from "react";

export default function DelphicomTextarea({
  height = "156px",
  fontSize = "14px",
  className,
  showCount,
  maxLength = 1000,
  isCount,
  value,
  onChange,
  ...others
}) {
  const { TextArea } = Input;
  const [text, setText] = useState(value);
  return (
    <>
      <style jsx>
        {`
          .customTextArea {
            resize: none;
            border: 1px solid #e3e3e3;
            height: ${height};
            border-radius: 4px;
            font-size: ${fontSize};
            font-weight: 400;
            line-height: 22px;
            letter-spacing: -0.01em;
            height: 140px;
            padding: 16px;
          }
          .customTextArea textarea::placeholder {
            color: #767676;
          }
          .countText {
            font-size: 10px;
            font-weight: 400;
            letter-spacing: -0.01em;
            text-align: right;
            color: #767676;
          }
          .countBold {
            color: #000000;
          }
          @media (max-width: 768px) {
            .customTextArea {
              height: 245px;
              font-size: 16px;
            }
          }
        `}
      </style>
      <TextArea
        className={`customTextArea ${className || ""}`}
        value={text}
        onChange={(e) => {
          const text = e?.target?.value;
          if (showCount && text?.length > maxLength) return;
          else setText(text);
        }}
        {...others}
      />
      {showCount && (
        <p className="countText">
          <span className="countBold">{text?.length || 0}</span> / {maxLength}
        </p>
      )}
    </>
  );
}

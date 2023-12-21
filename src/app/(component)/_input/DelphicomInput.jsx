import { Input } from "antd";

export default function DelphicomInput({
  className,
  height = 54,
  fontSize = 14,
  ...others
}) {
  return (
    <>
      <style jsx global>{`
        .inputCustom {
          height: ${height}px;
          border: 1px solid #e3e3e3;
          border-radius: 4px;
          font-size: ${fontSize}px;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
        .inputCustom::placeholder {
          color: #767676;
        }
      `}</style>
      <Input {...others} className={`inputCustom ${className || ""}`} />
    </>
  );
}

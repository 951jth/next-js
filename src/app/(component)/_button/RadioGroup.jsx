import { Radio } from "antd";
import RoundCheckbox from "../_checkbox/RoundCheckbox";

export default function RadioGroup({ options, ...others }) {
  return (
    <>
      <style jsx global>
        {`
          .radioGroupWrap {
            padding: 16px 30px;
            border: 1px solid #e3e3e3;
          }
          .checkboxWrap {
            display: inline-flex;
            align-items: center;
            margin-right: 30px;
          }
        `}
      </style>
      <div className="radioGroupWrap">
        {options?.map((e) => (
          <div className="checkboxWrap" key={e.value}>
            <RoundCheckbox style={{ marginRight: 10 }} />
            <label>{e?.label}</label>
          </div>
        ))}
      </div>
    </>
  );
}

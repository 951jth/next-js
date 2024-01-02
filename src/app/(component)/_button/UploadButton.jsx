import { Button, Upload } from "antd";
import DelphicomInput from "../_input/DelphicomInput";
import styles from "./UploadButton.module.css";

export default function UploadButton({
  fileList,
  setFileList,
  accept = "image/*,.pdf,.xlx,.xlsx,.zip,.html",
  ...others
}) {
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  return (
    <div className={styles.UploadButtonWrap}>
      <div className={styles.inputWrap}>
        <p>{fileList.map((file) => file.name).join(", ")}</p>
      </div>
      <div className={styles.buttonWrap}>
        <Upload
          beforeUpload={() => false}
          multiple={false}
          fileList={fileList || []}
          onChange={handleChange}
          maxCount={1}
          accept={accept}
        >
          <Button type="primary" block={true}>
            파일첨부
          </Button>
        </Upload>
      </div>
    </div>
  );
}

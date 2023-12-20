import { Button, Modal } from "antd";
import Image from "next/image";
import CloseIcon from "@icons/close.png";
import styles from "./DelphicomModal.module.css";

export default function DelphicomModal({ children, setOpen, ...ohters }) {
  return (
    <Modal
      {...ohters}
      closeIcon={false}
      onCancel={() => setOpen(false)}
      wrapClassName={styles.modalContainer}
    >
      <div className={styles.closeBtnWrap}>
        <Button
          icon={<Image src={CloseIcon} width={20} height={20} />}
          type="text"
          onClick={() => setOpen(false)}
        ></Button>
      </div>
      {children}
    </Modal>
  );
}

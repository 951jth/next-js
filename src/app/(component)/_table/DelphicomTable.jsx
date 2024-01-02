import styles from "./DelphicomTable.module.css";

export default function DelphicomTable({ children, ...others }) {
  return (
    <div className={styles.tableContainer}>
      <table {...others} className={styles.customTable}>
        {children}
      </table>
    </div>
  );
}

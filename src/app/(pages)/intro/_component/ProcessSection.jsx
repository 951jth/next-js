import styles from "./ProcessSection.module.css";
export default function ProcessSection() {
  return (
    <div className={styles.container}>
      <p className="section-title">제작단계</p>
      <p
        className="section-description"
        style={{ maxWidth: 680, margin: "0 auto" }}
      >
        다년간의 경험이 있는 개발 전문 회사로 기획부터 참여하여 고객사와 유저
        모두를 만족할 수 있는 앱을 제작합니다.
      </p>
    </div>
  );
}

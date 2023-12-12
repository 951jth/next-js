import { Col, Row } from "antd";
import styles from "./ReasonSection.module.css";
import ReasonCard from "@/app/(component)/_card/ReasonCard";
import professional from "@icons/professional.svg";
import money from "@icons/money.png";
import maintenance from "@icons/maintenance.svg";
import people from "@icons/people.svg";
import Image from "next/image";
import docImg from "@icons/document.svg";

export default function ReasonSection() {
  return (
    <div className={styles.container}>
      <p className={styles.bold}>
        이런 <span className={styles.emphasis}>고민</span>을 해 보신 고객이라면
      </p>
      <Row gutter={[40, 50]} style={{ margin: "0 auto", maxWidth: 1126 }}>
        {/* 이모티콘 임시 */}
        <Col lg={8} xs={24}>
          <ReasonCard
            text={
              <>
                개발 비용이
                <br />
                거품 없는 합리적인
                <br />
                비용인가?
              </>
            }
            icon={<Image src={money} alt="money" width={223} />}
          />
        </Col>
        <Col lg={8} xs={24}>
          <ReasonCard
            text={
              <>
                유지 보수는
                <br />
                확실한가?
              </>
            }
            icon={<Image src={maintenance} alt="maintenance" width={225} />}
          />
        </Col>
        <Col lg={8} xs={24}>
          <ReasonCard
            text={
              <>
                기획을 함께
                <br />
                고민해 주고
                <br />
                소통이 잘 되는가?
              </>
            }
            icon={<Image src={people} alt="people" width={242} />}
          />
        </Col>
        <Col lg={12} xs={24}>
          <ReasonCard
            text={
              <>
                고객이 원하는
                <br />
                디자인, 기능으로
                <br />
                제작할 수 있는
                <br />
                전문 기업인가?
              </>
            }
            icon={
              <Image
                src={professional}
                alt="professional"
                width={344}
                height={334}
              />
            }
          />
        </Col>
        <Col lg={12} xs={24}>
          <ReasonCard
            text={
              <>
                기획을 함께
                <br />
                고민해 주고
                <br />
                소통이 잘 되는가?
              </>
            }
            icon={<Image src={docImg} alt="docImg" width={272} />}
            iconStyle={{ right: 33, bottom: 32 }}
          />
        </Col>
      </Row>
      <p className={styles.withDelphicom}>
        20년간 글로벌 역량을 갖춘
        <br />
        IT 기술 파트너 <span className={styles.delphicom}>델피콤</span>이 함께
        합니다.
      </p>
    </div>
  );
}

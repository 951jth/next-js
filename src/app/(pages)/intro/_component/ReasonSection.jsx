import { Col, Row } from "antd";
import styles from "./ReasonSection.module.css";
import ReasonCard from "@/app/(component)/_card/ReasonCard";
import price from "@icons/price.png";
import code from "@icons/code.png";
import people from "@icons/people.png";
import touchApp from "@icons/touchApp.png";
import documentCheck from "@icons/documentCheck.png";
import Image from "next/image";
import useResponsive from "@/hook/useResponsive";

export default function ReasonSection() {
  const { mobile } = useResponsive();
  return (
    <div className={styles.container}>
      <p className={styles.bold}>
        이런 <span className={styles.emphasis}>고민</span>을 해 보신 고객이라면
      </p>
      <Row
        className={styles.cardWrap}
        gutter={[0, { xs: 16, sm: 16, md: 16, lg: 50 }]}
      >
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
            icon={<Image src={price} alt="price" width={mobile ? 160 : 223} />}
            iconStyle={
              mobile ? { right: 18, bottom: 11 } : { right: 11, bottom: 6 }
            }
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
            icon={<Image src={code} alt="code" width={mobile ? 160 : 225} />}
            iconStyle={
              mobile ? { right: 23, bottom: 17 } : { right: 19, bottom: 15 }
            }
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
            icon={
              <Image src={people} alt="people" width={mobile ? 200 : 242} />
            }
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
                src={touchApp}
                alt="touchApp"
                width={mobile ? 194 : 344}
                height={mobile ? 151 : 334}
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
            icon={
              <Image
                src={documentCheck}
                alt="documentCheck"
                width={mobile ? 160 : 272}
              />
            }
            iconStyle={
              mobile ? { right: 12, bottom: 22 } : { right: 14, bottom: 5 }
            }
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

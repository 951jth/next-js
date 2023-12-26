"use client";
import {
  Button,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Upload,
  notification,
} from "antd";
import { useForm } from "antd/es/form/Form";
import styles from "./page.module.css";
import inquiry from "@/service/inquiry";
import useNotification from "@/hook/useNotification";
import { useState } from "react";
import file from "@/service/file";
import { urlDownload } from "@/util/File";
import DelphicomInput from "@/app/(component)/_input/DelphicomInput";
import DelphicomTextarea from "@/app/(component)/_input/DelphicomTextarea";
import RoundCheckbox from "@/app/(component)/_checkbox/RoundCheckbox";
import { Styles } from "@/util/CommonStyle";
import RadioGroup from "@/app/(component)/_button/RadioGroup";
import { isEmail } from "@/util/Format";
import UploadButton from "@/app/(component)/_button/UploadButton";
import BudgetInput from "@/app/(component)/_input/BudgetInput";
import { checkRequiredValue, removeEmpty } from "@/util/Global";
import Image from "next/image";

export default function InquiryPage() {
  const [form] = useForm();
  const { successNoti, errorNoti } = useNotification();
  const [fileList, setFileList] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [agreement, setAgreement] = useState(false);
  const serviceOptions = [
    { label: "웹 개발", value: "WEB" },
    { label: "앱 개발", value: "APP" },
  ];
  const [serviceType, setServiceType] = useState([]);
  const [isError, setIsError] = useState(false);

  const onSubmit = async () => {
    const formValues = form.getFieldsValue();
    const allValues = { ...formValues, service_type: serviceType };
    const errorText = {
      company_name: "회사명",
      name: "이름/직함",
      phone: "연락처",
      email: "이메일",
      service_type: "서비스 종류",
    };
    const errors = checkRequiredValue(
      allValues,
      ["budget", "contents"],
      errorText
    );
    if (errors?.[0]) return;
    try {
      if (fileList?.[0]) {
        const fileProm = await file.uploadFile(fileList?.[0]);
        const fileData = fileProm?.data?.data;
        setDownloadUrl(fileData.filepath);
        if (fileData?.filepath) allValues["file_path"] = fileData.filepath;
      }
      const inquiryProm = await inquiry.postProductionInquiry(
        removeEmpty(allValues)
      );
      if (inquiryProm) {
        console.log(inquiryProm);
        successNoti("등록 되었습니다.");
      }
    } catch (e) {
      console.log(e);
      errorNoti("등록에 실패 하였습니다.");
    }
  };

  const onUpload = () => {
    if (fileList?.[0]) {
      file.uploadFile(fileList?.[0]).then(async (res) => {
        const data = res?.data?.data;
        setDownloadUrl(data.filepath);
        // urlDownload(data?.filepath, data.name);
      });
    }
  };

  const onSearch = (id) => {
    inquiry.getProductionInquiryById(id).then((res) => {
      console.log(res);
    });
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const Required = <span className={styles.required}>*</span>;

  return (
    <div className={styles.container}>
      <Row className={styles.titleRow}>
        <Col lg={8} md={24} sm={24} xs={24}>
          <span className={styles.title}>제작문의</span>
        </Col>
        <Col lg={16} md={24} sm={24} xs={24}>
          <p className={styles.description} style={{ marginBottom: 8 }}>
            WEB, APP 계발을 기획 중이신가요?
            <br />
            개발비용이 부담이 되시나요?
          </p>
          <p className={styles.description}>
            <span className={styles.emphasis}>델피콤</span>은&nbsp;
            <span className={styles.emphasis}>20년간의 경험과 노하우</span>를
            바탕으로 클라이언트에게
            <br />
            수준 높은 상상이상의 WEB, APP을 만들어 드립니다.
          </p>
        </Col>
      </Row>
      <p className={styles.requiredText}>{Required}필수입력</p>
      <Form form={form} layout="vertical">
        <Row gutter={[60, 50]}>
          <Col md={24} lg={12} sm={24} xs={24}>
            <p className={styles.formLabel}>회사명{Required}</p>
            <Form.Item name="company_name" noStyle rules={[{ required: true }]}>
              <DelphicomInput placeholder="회사명을 입력해 주세요" />
            </Form.Item>
          </Col>
          <Col md={24} lg={12} sm={24} xs={24}>
            <p className={styles.formLabel}>서비스 종류{Required}</p>
            <RadioGroup
              options={serviceOptions}
              values={serviceType}
              setValues={setServiceType}
            />
            <p className={styles.validation}>서비스 종류를 선택해주세요.</p>
          </Col>
          <Col md={24} lg={12} sm={24} xs={24}>
            <p className={styles.formLabel}>이름/직함{Required}</p>
            <Form.Item name="name" noStyle rules={[{ required: true }]}>
              <DelphicomInput placeholder="이름/직함을 입력해 주세요" />
            </Form.Item>
          </Col>
          <Col md={24} lg={12} sm={24} xs={24}>
            <p className={styles.formLabel}>예산 범위{Required}</p>
            <Form.Item name="budget" noStyle rules={[{ required: true }]}>
              <BudgetInput
                placeholder="예산 범위를 입력해 주세요"
                isComma={true}
              />
            </Form.Item>
          </Col>
          <Col md={24} lg={12} sm={24} xs={24}>
            <p className={styles.formLabel}>연락처{Required}</p>
            <Form.Item name="phone" noStyle rules={[{ required: true }]}>
              <DelphicomInput placeholder="연락처를 입력해 주세요" />
            </Form.Item>
          </Col>
          <Col md={24} lg={12} sm={24} xs={24}>
            <p className={styles.formLabel}>참고 문서{Required}</p>
            <UploadButton fileList={fileList} setFileList={setFileList} />
            <p className={styles.validation}>
              여러 개의 파일은 압축해서 20MB 이하 ZIP 파일로 올려주세요.
            </p>
          </Col>
          <Col md={24} lg={12} sm={24} xs={24}>
            <p className={styles.formLabel}>이메일{Required}</p>
            <Form.Item
              name="email"
              noStyle
              rules={[{ required: true }, { type: "email", warningOnly: true }]}
            >
              <DelphicomInput
                placeholder="이메일을 입력해 주세요"
                onChange={(e) => {
                  setIsError(!isEmail(e?.target?.value));
                }}
              />
            </Form.Item>
            <p
              className={styles.validation}
              style={isError ? { color: "#E91E63" } : {}}
            >
              {isError
                ? "이메일 형식이 맞지 않습니다."
                : "입력하신 메일로 회신을 드리오니 메일 주소를 정확히 입력해 주세요."}
            </p>
          </Col>
          <Col xs={24}>
            <p className={styles.formLabel}>문의 내용</p>
            <Form.Item name="contents" noStyle>
              <DelphicomTextarea
                placeholder="문의 내용을 입력해 주세요"
                showCount={true}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <div className={styles.agreementContainer}>
        <p className={styles.agreementTitle}>
          개인정보 수집 및 이용에 대한 동의
        </p>
        <div className={styles.agreementContent}>
          <p className={styles.agreementList}>
            1. 개인정보 수집이용 목적 : 서비스 이용 문의 시 고객 응대
            <br />
            2. 개인정보 수집 항목 : 수집 항목 필수 : 이름, 이메일 주소
            <br />
            <span className={styles.agreeEmphasis}>
              3. 수집한 개인정보의 보유 및 이용기간 : 1년
              <br /> 단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한
              경우에는 해당 기간만큼 보관 후 삭제합니다.
            </span>
            <br /> 고객님께서는 동의 거부 권리가 있습니다. 단, 상기 개인정보
            수집/이용에 동의하지 않으시는 경우 상담이 불가합니다.
          </p>
        </div>
        <div style={Styles.rowVerticalCenter} className={styles.agreementRow}>
          <RoundCheckbox
            value={agreement}
            setValue={setAgreement}
            style={{ marginRight: 8, marginLeft: 16 }}
          />
          <p className={styles.checkAgreement}>
            <span className={styles.essential}>(필수)</span> 개인정보 수집 및
            이용에 대한 동의를 확인하였으며 이에 동의합니다. 상담 목적으로만
            사용됩니다.
          </p>
        </div>
      </div>
      <div className={styles.btnRow}>
        <Button className={styles.cancelBtn}>취소</Button>
        <Button
          type="primary"
          className={styles.submitBtn}
          disabled={!agreement}
          onClick={onSubmit}
        >
          문의 하기
        </Button>
      </div>
      {/* {downloadUrl && (
        <div>
          <a href={downloadUrl} download={downloadUrl}>
            {downloadUrl}
          </a>
        </div>
      )} */}
    </div>
  );
}

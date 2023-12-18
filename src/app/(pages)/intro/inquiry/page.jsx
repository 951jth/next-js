"use client";
import { Button, Flex, Form, Input, Upload, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import styles from "./page.module.css";
import inquiry from "@/service/inquiry";
import useNotification from "@/hook/useNotification";

export default function InquiryPage() {
  const [form] = useForm();
  const { successNoti } = useNotification();
  const onSubmit = () => {
    const formValues = form.getFieldsValue();
    console.log(formValues);
    inquiry.postProductionInquiry(formValues).then((res) => {
      console.log(res);
      successNoti("등록 되었습니다.");
    });
  };

  const onSearch = (id) => {
    inquiry.getProductionInquiryById(id).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.container}>
      <Form form={form} layout="vertical">
        <Form.Item name="company_name" label="회사명">
          <Input />
        </Form.Item>
        <Form.Item name="name" label="이름/직원">
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="전화번호">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="이메일">
          <Input />
        </Form.Item>
        <Form.Item name="service_type" label="서비스 종류">
          <Input />
        </Form.Item>
        <Form.Item name="budget" label="예산범위">
          <Input />
        </Form.Item>
        <Form.Item name="contents" label="문의내용">
          <Input action={() => false} />
        </Form.Item>
        <Form.Item name="file_path" label="파일경로임시">
          <Input />
        </Form.Item>
        {/* <Form.Item name="file_path">
        </Form.Item> */}
      </Form>
      <Upload listType="picture-card" beforeUpload={() => false}>
        파일첨부
      </Upload>
      <Flex justify="space-between">
        <div>
          <Input.Search enterButton="ID조회" onSearch={onSearch} />
        </div>
        <Button type="primary" onClick={onSubmit}>
          등록
        </Button>
      </Flex>
    </div>
  );
}
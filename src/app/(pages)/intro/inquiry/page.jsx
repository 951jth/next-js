"use client";
import { Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import styles from "./page.module.css";

export default function InquiryPage() {
  const [form] = useForm();

  return (
    <div className={styles.container}>
      <Form form={form} layout="vertical">
        <Form.Item name="COMPANY_NAME" label="회사명">
          <Input />
        </Form.Item>
        <Form.Item name="NAME" label="이름/직원">
          <Input />
        </Form.Item>
        <Form.Item name="PHONE" label="전화번호">
          <Input />
        </Form.Item>
        <Form.Item name="EMAIL" label="이메일">
          <Input />
        </Form.Item>
        <Form.Item name="SERVICE_TYPE" label="서비스 종류">
          <Input />
        </Form.Item>
        <Form.Item name="BUDGET" label="예산범위">
          <Input />
        </Form.Item>
        <Form.Item name="CONTENTS" label="문의내용">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}

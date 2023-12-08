"use client";
import admin from "@/service/admin";
import { Button, Flex, Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import styles from "./page.module.css";
import { useState } from "react";

export default function JoinPage() {
  const [form] = useForm();
  const [submitDisable, setSubmitDisable] = useState(true);

  function getMember() {
    admin.getAdminList().then((res) => {
      console.log(res.data);
    });
  }

  function onSubmit() {
    const formValues = form.getFieldsValue();
    console.log("formValues", formValues);
    admin.postAdmin(formValues).then((res) => {
      console.log(res);
    });
  }

  function checkDuplicated(text) {
    admin
      .getAdminById(text)
      .then((res) => {
        if (res?.data?.data) {
          setSubmitDisable(true);
        } else setSubmitDisable(false);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className={styles.submitform}>
      <h3>어드민 페이지</h3>
      <Form form={form} layout="vertical">
        <Form.Item name="ID" label="ID">
          <Input.Search onSearch={checkDuplicated} enterButton="중복체크" />
        </Form.Item>
        <Form.Item name="PW" label="비밀번호">
          <Input />
        </Form.Item>
        <Form.Item name="NAME" label="이름">
          <Input />
        </Form.Item>
        <Form.Item name="EMAIL" label="E-MAIL">
          <Input />
        </Form.Item>
        <Form.Item name="PHONE" label="전화번호">
          <Input />
        </Form.Item>
      </Form>
      <Flex justify="space-between">
        <Button type="primary" onClick={getMember}>
          어드민 목록 조회
        </Button>
        <Button type="primary" onClick={onSubmit} disabled={submitDisable}>
          어드민 등록
        </Button>
      </Flex>
    </div>
  );
}

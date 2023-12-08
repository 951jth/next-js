"use client";
import { Button, Form, Input } from "antd";
import styles from "./page.module.css";
import { useForm } from "antd/es/form/Form";
import admin from "@/service/admin";
import { useLocalStore } from "@/store/LocalStore";
import { signIn } from "next-auth/react";

export default function Loginpage() {
  const { setUserToken } = useLocalStore();
  const [form] = useForm();
  async function onLogin() {
    const formValues = form.getFieldsValue();
    console.log("formValues", formValues);

    admin.loginAdmin(formValues).then((res) => {
      setUserToken(res?.data?.data);
    });
  }

  return (
    <div className={styles.loginForm}>
      <p className={styles.title}>로그인 페이지</p>
      <Form form={form} layout="vertical">
        <Form.Item name="ID" label="아이디">
          <Input />
        </Form.Item>
        <Form.Item name="PW" label="패스워드">
          <Input />
        </Form.Item>
      </Form>
      <div>
        <Button type="primary" size="large" block onClick={onLogin}>
          로그인
        </Button>
      </div>
    </div>
  );
}

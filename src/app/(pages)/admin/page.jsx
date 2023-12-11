"use client";
import admin from "@/service/admin";
import { Button, Flex, Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import styles from "./page.module.css";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminHome() {
  const [form] = useForm();
  const [submitDisable, setSubmitDisable] = useState(true);
  const router = useRouter();

  function getMember() {
    admin.getAdminList().then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div className={styles.submitform}>
      <h3 style={{ marginBottom: 20 }}>어드민 페이지</h3>
      <Flex>
        <Button type="primary" onClick={getMember} style={{ marginRight: 8 }}>
          어드민 목록 조회
        </Button>
        <Button
          type="primary"
          onClick={() => router.push("/admin/join")}
          style={{ marginRight: 8 }}
        >
          어드민 추가
        </Button>
        <Button
          type="primary"
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </Button>
      </Flex>
    </div>
  );
}

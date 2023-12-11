"use client";
import { Button, Form, Input } from "antd";
import styles from "./page.module.css";
import { useForm } from "antd/es/form/Form";
import admin from "@/service/admin";
import { useLocalStore } from "@/store/LocalStore";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// export function getServerSideProps() {
//   const session = useSession();
//   console.log("session");
// }

export default function Loginpage() {
  const [form] = useForm();
  const router = useRouter();
  const session = useSession();
  const pathname = usePathname();

  async function onLogin() {
    const formValues = form.getFieldsValue();
    // admin.loginAdmin(formValues).then((res) => {
    //   setUserToken(res?.data?.data);
    // });

    //next-auth를 활용하여, 쿠키에 유저 정보 jwt 저장
    await signIn("admin-login", {
      ...formValues,
      redirect: false,
    });
  }

  useEffect(() => {
    if (!!session?.data && pathname !== "/admin") {
      router.replace("/admin");
    }
  }, [session?.data]);

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

"use client";
import admin from "@/service/admin";
import { Button } from "antd";

export default function introMain() {
  return (
    <div>
      소개 페이지
      <Button type="primary" onClick={() => console.log(process.env)}>
        환경변수조회
      </Button>
    </div>
  );
}

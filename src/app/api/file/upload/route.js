import { NextResponse } from "next/server";
import { mkdir, stat, writeFile } from "fs/promises";
import { readFile, unlink } from "fs";
import dayjs from "dayjs";
import { formatBytes } from "@/util/Format";

export async function POST(req) {
  let path = null;
  let errorMsg = null;
  const data = await req.formData();
  const uploadDir = `public/assets/uploads/${dayjs().format("YYYYMMDD")}`;
  const file = data.get("file");

  if (!file) errorMsg = "파일 데이터가 존재하지 않습니다.";
  else if (file?.size > 1024 * 1024 * 20)
    errorMsg = "파일 사이즈는 20MB까지 등록 가능합니다.";

  if (errorMsg)
    return NextResponse.json({ errorMsg: errorMsg }, { status: 400 });

  //날짜별 파일 경로 생성
  try {
    await stat(uploadDir);
  } catch (e) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      return NextResponse.json(
        { error: "파일 업로드중 에러가 발생 하였습니다." },
        { status: 500 }
      );
    }
  }

  //파일 생성
  try {
    //파일 고유값 설정
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const extension = file?.name?.split(".").pop().toLowerCase();
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    path = `${uploadDir}/${uniqueSuffix}.${extension}`;
    // 파일명에서 확장자 추출
    await writeFile(path, buffer);
    return NextResponse.json({
      data: {
        filepath: `./${path}`,
        size: file?.size,
        name: file?.name,
      },
    });
  } catch (e) {
    return NextResponse.json({ errorMsg: "파일 업로드 에러" }, { status: 400 });
  }
}

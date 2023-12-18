import { pool } from "@/db/mariaDb";
import { bigIntToString, objectToSqlValue } from "@/util/sql";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req?.json();
  const {
    company_name,
    name,
    phone,
    email,
    service_type,
    budget,
    contents,
    file_path,
  } = body;
  const CREATED = dayjs().format("YYYY-MM-DD hh:mm:ss");
  let conn;

  try {
    conn = await pool.getConnection();
    await conn.beginTransaction();
    const rows = await conn.query(
      `INSERT INTO PRODUCTION_INQUIRY VALUE (${objectToSqlValue({
        id: null,
        company_name,
        name,
        phone,
        email,
        service_type,
        budget,
        contents,
        CREATED,
      })})`
    );
    const result = bigIntToString(rows);
    //업로드 파일 존재시
    if (!!file_path && result?.insertId) {
      await conn.query(
        `INSERT INTO PRODUCTION_INQUIRY_ATTACH 
          VALUE (NULL, ${result?.insertId}, '${file_path}')`
      );
    }
    await conn.commit();
    return NextResponse.json({ data: { ...body, CREATED: CREATED } });
  } catch (e) {
    conn.rollback();
    throw e;
  } finally {
    conn && conn.release();
  }
}

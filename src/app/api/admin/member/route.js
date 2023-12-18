import { pool } from "@/db/mariaDb";
import { setSqlDateForm } from "@/util/Format";
import { objectToSqlValue } from "@/util/sql";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export async function GET(req) {
  let conn = null;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM ADMIN");
    return NextResponse.json({
      data: setSqlDateForm(rows),
    });
  } catch (e) {
    throw e;
  } finally {
    conn && conn.release();
  }
}

export async function POST(req) {
  const body = await req.json();
  const { ID, PW, NAME, EMAIL, PHONE } = body;
  const CREATED = dayjs().format("YYYY-MM-DD hh:mm:ss");
  let conn = null;
  try {
    conn = await pool.getConnection();
    await conn.beginTransaction();
    await conn.query(
      `INSERT INTO ADMIN VALUE (${objectToSqlValue({
        ID,
        PW,
        NAME,
        EMAIL,
        PHONE,
        CREATED: true,
      })})`
    );
    await conn.commit();
    return NextResponse.json({ data: { ...body, CREATED: CREATED } });
  } catch (e) {
    conn.rollback();
    throw e;
  } finally {
    conn && conn.release();
  }
}

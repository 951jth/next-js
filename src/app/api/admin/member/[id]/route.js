import { pool } from "@/db/mariaDb";
import { getParams } from "@/util/Query";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  let conn = null;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * FROM ADMIN WHERE ID='${id}'`);
    return NextResponse.json({ data: rows?.[0] });
  } catch (e) {
    throw e;
  } finally {
    conn && conn.release();
  }
}

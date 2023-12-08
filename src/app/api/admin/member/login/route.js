import { pool } from "@/db/mariaDb";
import { setSqlDateForm } from "@/util/Format";
import { getParams } from "@/util/Query";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { ID, PW } = getParams(req?.url);
  let conn = null;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      `SELECT * FROM ADMIN WHERE ID='${ID}' AND PW='${PW}'`
    );
    return NextResponse.json({
      data: setSqlDateForm(rows)?.[0],
    });
  } catch (e) {
    console.log(e);
    throw e;
  } finally {
    conn && conn.release();
  }
}

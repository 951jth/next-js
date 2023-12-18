import { pool } from "@/db/mariaDb";
import { bigIntToString } from "@/util/sql";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      `SELECT * FROM PRODUCTION_INQUIRY LEFT JOIN 
        (SELECT ID AS FILE_ID, FILE_PATH, PRODUCTION_INQUIRY_ID AS INQUIRY_ID FROM PRODUCTION_INQUIRY_ATTACH)TB_FILE 
        ON PRODUCTION_INQUIRY.ID = TB_FILE.INQUIRY_ID
        WHERE ID='${id}'`
    );

    return NextResponse.json({ data: bigIntToString(rows) });
  } catch (e) {
    throw e;
  } finally {
    conn && conn.release();
  }
}

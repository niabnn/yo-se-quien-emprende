import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  const conn = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: Number(process.env.DATABASE_PORT || 3306),
  });

  const [rows] = await conn.query(
    "SELECT id, nombre, descripcion, imagen, ubicacion, categoria FROM emprendimientos"
  );
  await conn.end();
  return NextResponse.json(rows);
}

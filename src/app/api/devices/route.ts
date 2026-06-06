// placeholder
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const devices = await sql`
    SELECT *
    FROM devices
    ORDER BY id DESC
  `;

  return NextResponse.json(devices);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const result = await sql`
    INSERT INTO devices (
      device_id,
      device_name,
      provider,
      status
    )
    VALUES (
      ${body.device_id},
      ${body.device_name},
      ${body.provider},
      ${body.status}
    )
    RETURNING *
  `;

  return NextResponse.json(result[0]);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();

  const result = await sql`
    UPDATE devices
    SET
      device_name=${body.device_name},
      provider=${body.provider},
      status=${body.status}
    WHERE id=${body.id}
    RETURNING *
  `;

  return NextResponse.json(result[0]);
}

export async function DELETE(
  req: NextRequest
) {
  const id =
    req.nextUrl.searchParams.get("id");

  await sql`
    DELETE FROM devices
    WHERE id=${Number(id)}
  `;

  return NextResponse.json({
    success: true
  });
}
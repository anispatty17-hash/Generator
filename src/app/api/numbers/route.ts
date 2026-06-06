// placeholder
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const numbers = await sql`
    SELECT *
    FROM numbers
    ORDER BY id DESC
  `;

  return NextResponse.json(numbers);
}

export async function POST(
  req: NextRequest
) {
  const body = await req.json();

  const result = await sql`
    INSERT INTO numbers(
      phone_number,
      provider,
      label,
      status
    )
    VALUES(
      ${body.phone_number},
      ${body.provider},
      ${body.label},
      ${body.status}
    )
    RETURNING *
  `;

  return NextResponse.json(result[0]);
}

export async function PUT(
  req: NextRequest
) {
  const body = await req.json();

  const result = await sql`
    UPDATE numbers
    SET
      phone_number=${body.phone_number},
      provider=${body.provider},
      label=${body.label},
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
    DELETE FROM numbers
    WHERE id=${Number(id)}
  `;

  return NextResponse.json({
    success: true
  });
}
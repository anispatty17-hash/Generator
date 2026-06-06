import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const id =
    req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "id required" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true
  });
}

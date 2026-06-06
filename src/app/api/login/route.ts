// placeholder
import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(
  req: NextRequest
) {
  const body = await req.json();

  const username =
    process.env.ADMIN_USERNAME ||
    "admin";

  const password =
    process.env.ADMIN_PASSWORD ||
    "admin123";

  if (
    body.username !== username ||
    body.password !== password
  ) {
    return NextResponse.json(
      {
        success: false
      },
      {
        status: 401
      }
    );
  }

  const token = signToken({
    username
  });

  const response =
    NextResponse.json({
      success: true
    });

  response.cookies.set(
    "token",
    token,
    {
      httpOnly: true,
      path: "/"
    }
  );

  return response;
}
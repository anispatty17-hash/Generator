// placeholder
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/inbox",
  "/devices",
  "/numbers",
  "/docs"
];

export function middleware(
  req: NextRequest
) {
  const token =
    req.cookies.get("token");

  const isProtected =
    protectedRoutes.some(
      (route) =>
        req.nextUrl.pathname.startsWith(
          route
        )
    );

  if (
    isProtected &&
    !token
  ) {
    return NextResponse.redirect(
      new URL(
        "/login",
        req.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/inbox/:path*",
    "/devices/:path*",
    "/numbers/:path*",
    "/docs/:path*"
  ]
};
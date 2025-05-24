// middleware.ts or middleware.js

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/login/" ||
    pathname === "/signUp" ||
    pathname === "/signUp/";

  const isProtectedPage =
    pathname.startsWith("/profile") || pathname.startsWith("/UploadScreen");

  // ✅ User is NOT logged in but trying to access protected page
  if (isProtectedPage && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/unauthorized";
    return NextResponse.rewrite(url);
  }

  // ✅ User is logged in and trying to go to login or signup
  if (isAuthPage && token) {
    const url = req.nextUrl.clone();
    url.pathname = "/profile"; // or homepage
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/UploadScreen/:path*", "/login", "/signUp"],
};

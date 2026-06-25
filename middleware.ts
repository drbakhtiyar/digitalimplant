import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANGS = ["az", "en", "ru"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLang = LANGS.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (
    !hasLang &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/sitemap") &&
    !pathname.startsWith("/robots") &&
    !pathname.startsWith("/favicon")
  ) {
    return NextResponse.redirect(new URL("/az", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

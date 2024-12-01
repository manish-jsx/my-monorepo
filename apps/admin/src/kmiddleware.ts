import { NextResponse } from 'next/server';

export async function middleware(request: Request) {
  const token = request.headers.get('Authorization');

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Verify token logic (JWT, etc.)
  const isAuthenticated = true; // Replace with actual logic
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/blog/:path*', '/pages/:path*', '/navigation/:path*'],
};
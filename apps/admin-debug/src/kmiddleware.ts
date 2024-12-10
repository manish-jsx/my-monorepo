import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: Request) {
  try {
    const cookieHeader = req.headers.get('Cookie');

    // Check for nullish cookie header
    if (!cookieHeader) {
        console.log("No cookie header found.");
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    const authToken = cookieHeader.split('; ').find((c) => c.startsWith('authToken='));
    if (!authToken) {
      console.log("No auth token found in cookie");
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    const token = authToken.split('=')[1];
    console.log('Token from cookie:', token);

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET environment variable not set!");
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Verify the token - will throw an error if invalid.
    await jwtVerify(token, new TextEncoder().encode(secret));
    return NextResponse.next();
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error); // Handle error type safety
    console.error('Middleware error:', errorMessage);
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/', '/blogs/:path*', '/pages/:path*', '/navigation/:path*'],
};
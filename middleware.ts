import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public routes that don't require authentication
const publicRoutes = ['/', '/login', '/register'];

// Define protected routes that require authentication
const protectedRoutes = ['/dashboard', '/editor', '/cms'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get token from cookies (for SSR) or check if it might exist in localStorage (for CSR)
  const token = request.cookies.get('areteToken')?.value;

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.includes(pathname);

  // For protected routes, if no token in cookies, let the client-side handle the redirect
  // This is because localStorage tokens can't be accessed in middleware
  if (isProtectedRoute && !token) {
    // Only redirect if we're sure there's no token
    // Let client-side authentication handle localStorage tokens
    return NextResponse.next();
  }

  // If we have a token and trying to access auth pages, redirect to dashboard
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

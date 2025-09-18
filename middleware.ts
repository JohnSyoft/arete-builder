import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public routes that don't require authentication
const publicRoutes = ['/', '/login', '/register'];

// Define protected routes that require authentication
const protectedRoutes = ['/dashboard', '/editor', '/cms'];

// Main app subdomain (where the editor/dashboard lives)
const MAIN_APP_SUBDOMAIN = 'webuilder';

// Production domain (your main domain)
const PRODUCTION_DOMAIN = 'hhola.app';
const MAIN_APP_DOMAIN = 'webuilder.hhola.app';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }
  
  // Parse subdomain from hostname
  const hostParts = hostname.split('.');
  const subdomain = hostParts.length > 2 ? hostParts[0] : null;
  
  // Debug logging (remove in production)
  console.log('Middleware Debug:', {
    hostname,
    hostParts,
    subdomain,
    pathname,
    isSubdomain: subdomain && hostParts.length > 2
  });
  
  // Get token from cookies (for SSR) or check if it might exist in localStorage (for CSR)
  const token = request.cookies.get('areteToken')?.value;

  // Only handle subdomain routing if we have a proper subdomain structure (e.g., subdomain.domain.com)
  // AND it's not the main app subdomain
  // AND it's not the main domain without subdomain
  const isMainDomain = hostname === PRODUCTION_DOMAIN || hostname === `www.${PRODUCTION_DOMAIN}`;
  const isMainAppDomain = hostname === MAIN_APP_DOMAIN;
  const isMainAppSubdomain = subdomain === MAIN_APP_SUBDOMAIN;
  
  if (subdomain && hostParts.length > 2 && !isMainAppSubdomain && !isMainDomain && !isMainAppDomain) {
    console.log('Handling subdomain:', subdomain);
    // This is a client subdomain (e.g., arete.hhola.app)
    // Rewrite to the subdomain route handler
    const subdomainUrl = new URL(`/subdomain/${subdomain}`, request.url);
    const response = NextResponse.rewrite(subdomainUrl);
    
    // Add CORS headers for subdomain requests
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    
    return response;
  }

  // For all other cases (localhost, main app, no subdomain), handle normal routing
  console.log('Handling normal routing for:', hostname);
  
  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.includes(pathname);

  // For protected routes, if no token in cookies, let the client-side handle the redirect
  // This is because localStorage tokens can't be accessed in middleware
  if (isProtectedRoute && !token) {
    console.log('Protected route without token, allowing client-side handling');
    // Only redirect if we're sure there's no token
    // Let client-side authentication handle localStorage tokens
    return NextResponse.next();
  }

  // If we have a token and trying to access auth pages, redirect to dashboard
  if (token && (pathname === '/login' || pathname === '/register')) {
    console.log('Redirecting authenticated user from auth pages to dashboard');
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  console.log('Allowing request to continue');
  // Allow the request to continue with CORS headers
  const response = NextResponse.next();
  
  // Add CORS headers to all responses
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  
  return response;
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

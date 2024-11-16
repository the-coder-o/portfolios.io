import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')

  const authPaths = ['/sign-in', '/sign-up', '/portfolios', '/rezume', '/timeline', '/onboarding']
  const isPublicPortfolio = /^\/portfolios\/[^/]+$/.test(request.nextUrl.pathname)

  if (token && (request.nextUrl.pathname === '/sign-in' || request.nextUrl.pathname === '/sign-up')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (token && request.nextUrl.pathname === '/onboarding') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!token && request.nextUrl.pathname !== '/' && !authPaths.includes(request.nextUrl.pathname) && !isPublicPortfolio) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

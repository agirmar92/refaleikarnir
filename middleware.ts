import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getLatestYearSlug } from './utils/proccessData'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/${getLatestYearSlug()}`, request.url))
}

export const config = {
  matcher: '/',
}

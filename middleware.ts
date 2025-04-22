import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en-US', 'nl-NL', 'it-IT', 'fr-FR', 'de-DE'];
const defaultLocale = 'en-US';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage) {
    const preferredLanguages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim());

    const matchedLocale = preferredLanguages.find(lang =>
      locales.includes(lang)
    );

    return matchedLocale || defaultLocale;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore requests for static files or internal paths
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};

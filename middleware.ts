import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'it'],         // доступные языки
  defaultLocale: 'en',           // язык по умолчанию
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // обязательно!
};

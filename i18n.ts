import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'it'] as const
export const defaultLocale = 'en'

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = locale ?? defaultLocale

  return {
    locale: activeLocale,
    messages: (await import(`@/messages/${activeLocale}.json`)).default,
  }
})

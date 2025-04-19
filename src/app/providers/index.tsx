'use client'

import {ReactNode} from 'react'
import {NextIntlClientProvider} from 'next-intl'
import {
	FormCacheProvider,
	LoadingProvider,
} from '@/shared/providers'

export const defaultLocale = 'en'
export const locales = ['en', 'it']

export const localeConfig = {
  locales,
  defaultLocale,
  timeZone: 'Europe/Rome',
}
type MainProviderProps = {
	children: ReactNode
	locale: string
	messages: Record<string, unknown>
}

export function MainProvider({children, locale, messages}: MainProviderProps) {
	return (
		<LoadingProvider>
			<NextIntlClientProvider locale={locale} messages={messages} timeZone='Europe/Rome'>
					<FormCacheProvider>{children}</FormCacheProvider>
			</NextIntlClientProvider>
		</LoadingProvider>
	)
}

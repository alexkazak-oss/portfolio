import {notFound} from 'next/navigation'
import {MainProvider} from '../providers'
import {NextIntlClientProvider} from 'next-intl'
import type {ReactNode} from 'react'
export function generateStaticParams() {
	return [{locale: 'en'}, {locale: 'it'}]
}

export const dynamicParams = false

export type LayoutProps = {
	children: ReactNode
	params: { locale: string }
}

export default async function LocaleLayout({children, params}: LayoutProps) {
	const locale = params.locale

	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch {
		notFound()
	}

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<main className='flex flex-col min-h-screen w-full'>
				<MainProvider locale={locale} messages={messages}>
					{children}
				</MainProvider>
			</main>
		</NextIntlClientProvider>
	)
}

import {ReactNode} from 'react'
import {notFound} from 'next/navigation'
import { MainProvider } from '../providers'
import Script from 'next/script'

import Header from '@/widgets/Header/Header'

export function generateStaticParams() {
	return [{locale: 'en'}, {locale: 'it'}]
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: ReactNode
	params: {locale: string}
}) {
	const {locale} = params

	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch {
		notFound()
	}

	return (

		<html lang={locale}>
			<body>
			<Script strategy='beforeInteractive' src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}></Script>
	<MainProvider locale={locale} messages={messages}>
		<Header />
		{children}
	</MainProvider>
   </body>
    </html>
)
}

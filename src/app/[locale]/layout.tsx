import {notFound} from 'next/navigation'
import {MainProvider} from '../providers'
import Script from 'next/script'
import Header from '@/widgets/Header/Header'

export function generateStaticParams() {
	return [{locale: 'en'}, {locale: 'it'}]
}

export const dynamicParams = false

type Props = {
	children: React.ReactNode
	params: { locale: string }
}

export default async function LocaleLayout(props: Props) {
	const locale = props.params.locale

	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch {
		notFound()
	}

	return (
		<html lang={locale}>
			<body>
				<Script
					strategy="beforeInteractive"
					src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
				/>
				<MainProvider locale={locale} messages={messages}>
					<Header />
					{props.children}
				</MainProvider>
			</body>
		</html>
	)
}

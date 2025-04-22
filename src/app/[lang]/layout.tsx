import {notFound} from 'next/navigation'
import {NextIntlClientProvider} from 'next-intl'
import {MainProvider} from '../providers'
import ClientLayout from './client-layout'
import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'

export function generateStaticParams() {
	return [{lang: 'en'}, {lang: 'it'}]
}

type Props = {
	children: React.ReactNode
	params: {lang: string}
}

export default async function LocaleLayout({children, params}: Props) {
	const {lang} = await params

	let messages
	try {
		messages = (await import(`../../messages/${lang}.json`)).default
	} catch (error) {
		console.error(`Не удалось загрузить переводы для языка "${lang}":`, error)
		notFound()
	}

	return (
		<NextIntlClientProvider locale={lang} messages={messages}>
			<MainProvider>
				<div className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden">
					{/* Sidebar / Header */}
					<Header className="w-full lg:w-[90px] shrink-0 z-50" />

					{/* Контент справа */}
						<ClientLayout>{children}</ClientLayout>

				</div>
						<Footer />
			</MainProvider>
		</NextIntlClientProvider>
	)
}

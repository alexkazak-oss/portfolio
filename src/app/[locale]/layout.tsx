import { notFound } from 'next/navigation'
import { MainProvider } from '../providers'
import { NextIntlClientProvider } from 'next-intl'
import ClientLayout from './client-layout'
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }]
}

export const dynamicParams = false

export default async function LocaleLayout(props: Promise<{
	children: React.ReactNode
	params: { locale: string }
 }>) {
	const { children, params } = await props
	const { locale } = params
 
	let messages
	try {
	  messages = (await import(`../../messages/${locale}.json`)).default
	} catch {
	  notFound()
	}
 
	return (
			<NextIntlClientProvider locale={locale} messages={messages}>
			  <MainProvider locale={locale} messages={messages}>
				 <ClientLayout>{children}</ClientLayout>
			  </MainProvider>
			</NextIntlClientProvider>
	)
 }
 
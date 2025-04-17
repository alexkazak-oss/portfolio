import {getRequestConfig} from 'next-intl/server'

export default getRequestConfig(async ({locale}) => {
	const fallbackLocale = locale || 'en'
	if (!locale) console.log(locale)

	return {
		locale: fallbackLocale,
		messages: (await import(`../messages/${fallbackLocale}.json`)).default,
	}
})

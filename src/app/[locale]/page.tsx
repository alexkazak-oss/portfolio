'use client'
import { useTranslations } from 'next-intl'

export default function Home() {
	const t = useTranslations('Home');

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1>{t('title')}</h1>
			<p>{t('description')}</p>
			<div className="mt-4 flex gap-4">
			</div>
		</div>
	);
}

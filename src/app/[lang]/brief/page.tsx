'use client'

import { useTranslations } from 'next-intl'

import {BriefForm} from '@/features/model/submit-brief/ui/BriefForm'

export default function BriefPage() {

	const t = useTranslations('BriefPage')


	return (
		<div className='max-w-4xl mx-auto px-4 py-12'>
			<h1 className='text-2xl font-bold mb-6'>{t('title')}</h1>
			<p className='text-gray-700 mb-4'>{t('description')}</p>
			<BriefForm />
		</div>
	)
}

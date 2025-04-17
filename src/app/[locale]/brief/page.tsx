
import { useTranslations } from 'next-intl'

import { BriefForm } from '@/features/model/submit-brief/ui/BriefForm'

export default function BriefPage() {
	const t = useTranslations('Brief')
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
		  <h1 className="text-2xl font-bold mb-6">{ t('title')}</h1>
      <BriefForm />
    </main>
  )
}

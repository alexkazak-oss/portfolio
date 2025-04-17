'use client'

import { useRouter, usePathname } from 'next/navigation'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui'

export function LanguageSelector() {
	const router = useRouter()
	const pathname = usePathname()

	if (!pathname) return null

	const currentLocale = pathname.split('/')[1] || 'en'

	const handleChange = (value: string) => {
		const newPath = pathname.replace(/^\/(en|it)/, `/${value}`)
		router.push(newPath)
	}

	const localeFlagMap: Record<string, string> = {
		en: '🇬🇧',
		it: '🇮🇹',
	}

	return (
		<Select onValueChange={handleChange} defaultValue={currentLocale}>
			<SelectTrigger className="w-full flex items-center justify-start">
				<SelectValue className=''>
					{localeFlagMap[currentLocale] || '🏳️'}
				</SelectValue>
			</SelectTrigger>
			<SelectContent className="z-200">
				<SelectGroup>
					<SelectItem value="en">🇬🇧</SelectItem>
					<SelectItem value="it">🇮🇹</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

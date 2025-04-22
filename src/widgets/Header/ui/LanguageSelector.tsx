'use client'

import {useRouter, usePathname} from 'next/navigation'
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
		router.push(newPath as unknown as Parameters<typeof router.push>[0])
	}
	
	
	

	const localeFlagMap: Record<string, string> = {
		en: 'EN',
		it: 'IT',
	}

	return (
		<div className='w-10'>
			<Select onValueChange={handleChange} defaultValue={currentLocale}>
				<SelectTrigger className='z-200'>
					<SelectValue className='text-white text-center inline-block px-7' placeholder='Select a language'>
						{localeFlagMap[currentLocale] || '🏳️'}
					</SelectValue>
				</SelectTrigger>
				<SelectContent className='z-200 bg-black pt-4'>
					<SelectGroup className='items-center justify-center flex flex-col w-full '>
						<SelectItem className='white text-white' value='en'>
							EN
						</SelectItem>
						<SelectItem className='white text-white' value='it'>
							IT
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

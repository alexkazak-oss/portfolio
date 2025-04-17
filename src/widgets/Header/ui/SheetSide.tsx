'use client'

import {useEffect, useState} from 'react'
import {
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'
import {Button} from '@/components/ui/button'
import {useTranslations, useLocale} from 'next-intl'
import {pagesLinks} from '../utils/links'
import Link from 'next/link'

type Props = {
	onClose?: () => void
}

export function SheetSide({onClose}: Props) {
	const t = useTranslations('Header')
	const [side, setSide] = useState<'left' | 'top'>('left')
	const locale = useLocale()

	const localizedLinks = pagesLinks.map((link) => ({
		...link,
		href: `/${locale}${link.href === '/' ? '' : link.href}`,
	}))

	useEffect(() => {
		const updateSide = () => {
			setSide(window.innerWidth < 768 ? 'top' : 'left')
		}

		updateSide()
		window.addEventListener('resize', updateSide)
		return () => window.removeEventListener('resize', updateSide)
	}, [])

	return (
		<SheetContent side={side}>
			<SheetHeader>
				<SheetTitle>{t('title')}</SheetTitle>
				<SheetDescription>{t('description')}</SheetDescription>
			</SheetHeader>

			<div className='grid gap-7 py-4'>
				<div className='w-full grid grid-cols-2 gap-7'>
					{localizedLinks.map((link) => (
						<SheetClose asChild key={link.key}>
							<Button
								variant='outline'
								className='w-full'
								asChild
								onClick={onClose}
							>
								<Link href={link.href} locale={locale}>
								{t(`links.${link.key}`, { default: link.key })}

								</Link>
							</Button>
						</SheetClose>
					))}
				</div>
			</div>

			<SheetFooter />
		</SheetContent>
	)
}

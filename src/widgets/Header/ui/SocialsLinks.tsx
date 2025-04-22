'use client'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'


export function SocialsLinks({className}: {className?: string}) {

	const socialLink = [
		{ label: 'I', href: '/instagram' },
		{ label: 'T', href: '/telegram' },
		{ label: 'L', href: '/linkedin' },
	] as const

	return (
		<div
			className={cn(`flex flex-col items-center gap-2 ${className}`
			)}
		>
			{socialLink.map((link) => (
				<Button
					key={link.label}
					variant='ghost'
					size='sm'
					style={'rounded'}
					asChild
				>
					<Link href={link.href}>{link.label}</Link>
				</Button>
			))}
		</div>
	)
}

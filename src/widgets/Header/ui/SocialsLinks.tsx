'use client'

import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {useBreakpoint} from '@/shared/providers'

export function SocialsLinks({className}: {className?: string}) {
	const breakpoint = useBreakpoint()
	const isDesktop = breakpoint === 'desktop'

	const socialLink = [
		{label: 'I', href: '/instagram'},
		{label: 'T', href: '/telegram'},
		{label: 'L', href: '/linkedin'},
	]

	return (
		<div
			className={cn(
				isDesktop
					? 'flex flex-col items-center gap-4'
					: 'flex items-center gap-4',
				className,
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

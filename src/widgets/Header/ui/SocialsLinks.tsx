'use client'

import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import {
	fromVerticalToHorizontal,
	socialBlockMotion,
} from '@/widgets/Header/anim'

interface Props {
	isOpen: boolean
	className?: string
}

export function SocialsLinks({isOpen, className}: Props) {
	const socialLink = [
		{label: 'I', href: 'https://instagram.com'},
		{label: 'T', href: 'https://t.me/yourchannel'},
		{label: 'L', href: 'https://linkedin.com/in/yourprofile'},
	] as const

	return (
		<motion.div
			variants={socialBlockMotion}
			initial='initial'
			animate='animate'
			custom={isOpen}
			className={cn('absolute flex justify-center', className)}
		>
			{socialLink.map((link, i) => (
				<motion.div
					key={link.label}
					custom={{i, isOpen}}
					variants={fromVerticalToHorizontal}
					initial='initial'
					animate='animate'
					className='mx-1 absolute'
				>
					<Button variant='ghost' size='sm' asChild>
						<Link href={link.href} target='_blank' rel='noopener noreferrer'>
							{link.label}
						</Link>
					</Button>
				</motion.div>
			))}
		</motion.div>
	)
}

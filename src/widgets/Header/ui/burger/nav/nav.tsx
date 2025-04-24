'use client'

import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {usePathname} from 'next/navigation'
import {useLocale, useTranslations} from 'next-intl'
import {menuSlide, slide} from '../../../anim'
import NavLink from './link/link'
import {pagesLinks} from '@/widgets/Header/utils/links'
import Curve from '@/shared/ui/curve/curve'
import Link from 'next/link'
import styles from './style.module.css'
import {cn} from '@/lib/utils'
import {useRouter} from 'next/navigation'

interface NavProps {
	closeMenu: () => void
}

export default function Nav({closeMenu}: NavProps) {
	const locale = useLocale()
	const t = useTranslations('Header')
	const pathname = usePathname()
	const [selectedIndicator, setSelectedIndicator] = useState(pathname)
	const router = useRouter()

	return (
		<>
			<Curve isOpen={true} />
		
		<motion.div
			variants={menuSlide}
			initial='initial'
			animate='enter'
			exit='exit'
			className={`fixed top-0 left-0 z-40 ${styles.menu}`}
		>

			<div className={styles.overlay} onClick={closeMenu} />

			<div className={styles.body}>
				<div
					onMouseLeave={() => setSelectedIndicator(pathname)}
					className={styles.nav}
				>
					<div className={styles.header}>
						<p>{t('title')}</p>
					</div>
					{pagesLinks.map(({key, href}, index) => {
						const handleClick = () => {
							closeMenu()
							router.push(`/${locale}${href}`)
						}

						return (
							<NavLink
								key={key}
								data={{title: t(`links.${key}`), href, index}}
								menuIsOpen={selectedIndicator === `/${locale}${href}`}
								setSelectedIndicator={setSelectedIndicator}
								locale={locale}
								onClick={handleClick}
							/>
						)
					})}
				</div>
				<div className={cn('lg:hidden flex items-center gap-4', styles.footer)}>
					{['Instagram', 'Facebook', 'LinkedIn'].map((name, i) => (
						<motion.div
							key={name}
							variants={slide}
							custom={i}
							initial='initial'
							animate='enter'
							exit='exit'
						>
							<Link
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.footerLink}
								onClick={closeMenu}
							>
								{name}
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
		</>
	)
}

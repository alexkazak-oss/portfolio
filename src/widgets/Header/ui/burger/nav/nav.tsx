'use client'

import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {usePathname} from 'next/navigation'
import {useLocale, useTranslations} from 'next-intl'
import {menuSlide} from '../../../anim'
import NavLink from './link/link'
import styles from './style.module.css'
import {pagesLinks} from '@/widgets/Header/utils/links'
import Curve from '@/shared/ui/curve/curve'

interface NavProps {
	closeMenu: () => void
}

export default function Nav({closeMenu}: NavProps) {
	const locale = useLocale()
	const t = useTranslations('Header')
	const pathname = usePathname()
	const [selectedIndicator, setSelectedIndicator] = useState(pathname)

	return (
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
						{pagesLinks.map(({key, href}, index) => (
							<NavLink
								key={key}
								data={{title: t(`links.${key}`), href, index}}
								menuIsOpen={selectedIndicator === `/${locale}${href}`}
								setSelectedIndicator={setSelectedIndicator}
								locale={locale}
							/>
						))}
					</div>
					<div className={styles.footer}>
						<a>Facebook</a>
						<a>Instagram</a>
						<a>Telegram</a>
						<a>LinkedIn</a>
					</div>
				</div>

				<Curve isOpen={true} />
			</motion.div>
	)
}

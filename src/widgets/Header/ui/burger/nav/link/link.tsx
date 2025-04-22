'use client'

import { useLocale } from 'next-intl'
import styles from './style.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slide, scale } from './../../../../anim'

interface LinkData {
  title: string;
  href: string;
  index: number;
}

interface LinkProps {
	data: LinkData
	menuIsOpen: boolean
	setSelectedIndicator: (href: string) => void
	locale: string
}

export default function NavLink({ data, menuIsOpen,  setSelectedIndicator }: LinkProps) {
  const { href, index, title } = data
  const locale = useLocale()

	return (
	  <div className={styles.linkContainer}>
			

    <motion.div
      className={` ${styles.link}`}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={menuIsOpen ? 'open' : 'closed'}
        className={styles.indicator}
      />
		<Link href={`/${locale}${href}`}>{title}</Link>



    </motion.div>
	  </div>
  )
}


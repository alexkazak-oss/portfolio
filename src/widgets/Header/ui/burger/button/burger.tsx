'use client'
import styles from './style.module.css'
import { useEffect, useState } from 'react'

interface BurgerProps {
	menuIsOpen: boolean
	toggleMenu: () => void
}

export default function Burger({ menuIsOpen, toggleMenu }: BurgerProps) {
	const [isActive, setIsActive] = useState(menuIsOpen)

	useEffect(() => {
		setIsActive(menuIsOpen)
	}, [menuIsOpen])

	const handleClick = () => {
		setIsActive(!isActive)
		toggleMenu()
	}

	return (
		<div onClick={handleClick} className={styles.button}>
			<div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
		</div>
	)
}

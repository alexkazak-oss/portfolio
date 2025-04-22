'use client'
import {SocialsLinks, LanguageSelector} from './ui'
import Burger from './ui/burger/button/burger'
import {useState} from 'react'
import {AnimatePresence} from 'framer-motion'
import {DynamicNav} from './ui/DynamicNav'

interface HeaderProps {
	className?: string
}

export default function Header({className = ''}: HeaderProps) {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	return (
		<>
			<div className='z-100 relative'>


		<header
			className={`
				bg-black text-white z-50
				w-full h-[60px] flex items-center justify-between px-6 py-4
				lg:w-[90px] lg:h-screen lg:flex-col lg:justify-between lg:items-center
				lg:fixed lg:left-0 lg:top-0
				${className}
			`}
		>
			<div className='text-lg font-bold'>GC</div>
					<Burger menuIsOpen={menuIsOpen} toggleMenu={() => setMenuIsOpen(!menuIsOpen)} />
					<div className='flex lg:flex-col flex-row items-center justify-center gap-4'>

			<LanguageSelector />
			<SocialsLinks className="hidden lg:flex" />
					</div>

		</header>
			</div>
		<div className='relative z-5'>
			<AnimatePresence mode='wait'>
				{menuIsOpen && <DynamicNav closeMenu={() => setMenuIsOpen(false)} />}
			</AnimatePresence>
				
		</div>
		</>
	)
}

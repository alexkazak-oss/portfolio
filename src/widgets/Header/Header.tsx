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
		<header>
			<div className='z-20 relative'>
				<div
					className={`
				bg-black text-white z-50
				w-full h-[60px] flex items-center justify-between px-6 py-4
				lg:w-[90px] lg:h-screen lg:flex-col lg:justify-between lg:items-center
				lg:fixed lg:left-0 lg:top-0
				${className}
			`}
				>
					<div className='text-lg font-bold'>Logo</div>
					<div className='flex lg:flex-col flex-row'>

					<Burger
						menuIsOpen={menuIsOpen}
						toggleMenu={() => setMenuIsOpen(!menuIsOpen)}
					/>
					<div className='flex flex-col gap-4 z-100'>
						<LanguageSelector />
						<div className=' z-50 h-[200px] justify-center lg:flex hidden w-full'>
							<SocialsLinks isOpen={menuIsOpen} className='lg:flex' />
						</div>
					</div>
					</div>
				</div>
			</div>
			<div className='relative z-5'>
				<AnimatePresence mode='wait'>
					{menuIsOpen && <DynamicNav closeMenu={() => setMenuIsOpen(false)} />}
				</AnimatePresence>
			</div>
		</header>
	)
}

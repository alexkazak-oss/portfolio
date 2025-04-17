'use client'

import {useState} from 'react'
import {Sheet, SheetTrigger} from '@/components/ui/sheet'
import {Button} from '@/components/ui/button'
import { SheetSide, SocialsLinks, LanguageSelector } from './ui'

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className='flex flex-col items-center justify-between p-4 bg-black text-white fixed w-[90px] z-100 h-full'>
			<div className='text-lg font-bold'>GC</div>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant='outline' className='w-full'>
						Menu
					</Button>
				</SheetTrigger>
				<SheetSide onClose={() => setOpen(false)} />
			</Sheet>
			<LanguageSelector />
			<SocialsLinks />
		</header>
	)
}

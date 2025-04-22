'use client'
import { ReactNode } from 'react'
export default function ClientLayout({ children }: { children: ReactNode }) {
	
	return (
		
				<main className='flex flex-col items-center justify-center min-h-screen w-screen lg:ml-[90px]'>
					{children}
				</main>
	)
}

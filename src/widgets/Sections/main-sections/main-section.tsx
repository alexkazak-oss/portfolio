'use client'

import React, {Suspense} from 'react'

interface AboutSectionProps {
	sectionTitle?: string
	title?: string
	subtitle?: string
	description?: string
	descriptionTitle?: string
	buttonLabel?: string
	returnObjects?: string
	content?: React.ReactNode
	stats?: {value: string; label: string}[]
	slider?: {image: string; label: string}[]
}

export const MainSection = ({
	sectionTitle,
	title,
	subtitle,
	description,
	descriptionTitle,
	buttonLabel,
	content,
}: AboutSectionProps) => {
	return (
		<section className='bg-[#171717] text-white py-24 px-4 sm:px-8 md:px-12 xl:px-20'>
			<div className='max-w-7xl mx-auto flex flex-col gap-16 lg:flex-row lg:items-start'>
				{/* Левая колонка */}
				<div className='lg:w-1/3 w-full'>
					<h2 className='uppercase text-xs sm:text-sm text-gray-400 tracking-wider mb-4'>
						{sectionTitle}
					</h2>
				</div>

				{/* Правая колонка */}
				<div className='lg:w-2/3 w-full flex flex-col gap-6'>
					<h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
						{title}
					</h3>

					<p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
						{subtitle}
					</p>
					<Suspense
						fallback={<div className='h-96 bg-gray-800 animate-pulse' />}
					>
						{content && <div className='w-full'>{content}</div>}
					</Suspense>
					<h4 className='font-light'>{descriptionTitle}</h4>
					<p className=''>{ description}</p>
					{buttonLabel && (
						<div className='mt-6'>
							<button className='bg-white text-black py-2.5 px-7 rounded-full font-medium text-sm hover:opacity-90 transition-all'>
								{buttonLabel}
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

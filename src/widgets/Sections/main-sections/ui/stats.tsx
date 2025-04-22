'use client'
interface StatItem {
	value: string
	label: string
	children?: React.ReactNode
}

export default function Stats({ stats }: { stats?: StatItem[] }) {
	return (
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
							{(stats ?? []).map((stat, index) => (
								<div
									key={index}
									className='flex items-center justify-center lg:justify-start'
								>
									<span className='text-4xl md:text-5xl font-extrabold text-white'>
										{stat.value}
									</span>

									<span className='text-lg text-gray-400 leading-snug'>
										{stat.label}
									</span>
								</div>
							))}
						</div>
	)
}

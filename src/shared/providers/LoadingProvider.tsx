'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	const [progress, setProgress] = useState(0)
	const [show, setShow] = useState(true)

	useEffect(() => {
		let isMounted = true

		const checkProgress = () => {
			const resources = performance.getEntriesByType('resource')
			const total = resources.length
			if (total === 0) return

			let loaded = 0
			for (const res of resources) {
				// Можно фильтровать по res.initiatorType === 'img' | 'script' и т.д.
				if ((res as PerformanceResourceTiming).responseEnd > 0) {
					loaded++
				}
			}

			const percent = Math.round((loaded / total) * 100)
			if (isMounted) {
				setProgress(percent)

				if (percent >= 70) {
					setTimeout(() => {
						setShow(false)
					}, 300) // мягкое исчезновение
				}
			}
		}

		// Проверка каждые 200ms до достижения 70%
		const interval = setInterval(checkProgress, 200)

		return () => {
			isMounted = false
			clearInterval(interval)
			setShow(true) // при переходе снова показать
			setProgress(0)
		}
	}, [pathname])

	return (
		<>
			{show && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 opacity-100">
					<span className="text-white text-lg">{progress}%</span>
				</div>
			)}

			<div className={`${show ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-700`}>
				{children}
			</div>
		</>
	)
}

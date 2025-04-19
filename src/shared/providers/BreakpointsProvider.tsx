import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export const BreakpointContext = createContext<'mobile' | 'tablet' | 'desktop'>('desktop')

export function useBreakpoint() {
	return useContext(BreakpointContext)
}

export function BreakpointProvider({ children }: { children: ReactNode }) {
	const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth
			if (width < 640) setBreakpoint('mobile')
			else if (width < 1024) setBreakpoint('tablet')
			else setBreakpoint('desktop')
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<BreakpointContext.Provider value={breakpoint}>
			{children}
		</BreakpointContext.Provider>
	)
}

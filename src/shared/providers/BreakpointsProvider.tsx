'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type Breakpoint = 'mobile' | 'tablet' | 'desktop'

const BreakpointContext = createContext<Breakpoint>('desktop')

export const useBreakpoint = () => useContext(BreakpointContext)

export function BreakpointProvider({ children }: { children: ReactNode }) {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop')

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

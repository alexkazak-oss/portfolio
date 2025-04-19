'use client'

import { ReactNode } from 'react'
import { BreakpointProvider } from '@/shared/providers'
import { HeaderWrapper } from '@/widgets/Header/HeaderWrapper'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <BreakpointProvider>
      <HeaderWrapper />
      <main className="flex-1 px-4">
        <div className="container">
          {children}
        </div>
      </main>
    </BreakpointProvider>
  )
}

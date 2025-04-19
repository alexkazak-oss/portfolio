'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { SheetSide } from '@/widgets/Header/ui'

type SheetContextValue = {
	open: boolean
	setOpen: (value: boolean) => void
}

const SheetContext = createContext<SheetContextValue | null>(null)

export function useSheet() {
	const context = useContext(SheetContext)
	if (!context) throw new Error('useSheet must be used within a SheetProvider')
	return context
}

export function SheetProvider({ children }: { children: ReactNode }) {
	const [open, setOpen] = useState(false)

	return (
		<SheetContext.Provider value={{ open, setOpen }}>
			{children}
			{open && <SheetSide onClose={() => setOpen(false)} />}
		</SheetContext.Provider>
	)
}

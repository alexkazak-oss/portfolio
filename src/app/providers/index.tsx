'use client'

import {ReactNode} from 'react'
import {
	FormCacheProvider,
} from '@/shared/providers'




type MainProviderProps = {
	children: ReactNode
}

export function MainProvider({children}: MainProviderProps) {
	return (
				<FormCacheProvider>{children}</FormCacheProvider>
	)
}

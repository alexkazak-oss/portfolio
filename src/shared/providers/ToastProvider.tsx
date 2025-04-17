'use client'

import { Toaster } from '@/components/ui/Toaster'

export function ToastProvider() {
	return <Toaster position='bottom-right' duration={8000} />
}

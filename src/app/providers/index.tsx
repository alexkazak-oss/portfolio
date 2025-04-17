'use client'

import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import {
  BreakpointProvider,
  FormCacheProvider,
} from '@/shared/providers'

type MainProviderProps = {
	children: ReactNode
	locale: string
	messages: Record<string, unknown>
 }
 

export function MainProvider({ children, locale, messages }: MainProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
        <BreakpointProvider>
          <FormCacheProvider>
            {children}
          </FormCacheProvider>
        </BreakpointProvider>
    </NextIntlClientProvider>
  )
}

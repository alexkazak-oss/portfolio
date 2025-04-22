'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const supportedLocales = ['en', 'it'] 

export function useDynamicTranslations<T = Record<string, unknown>>() {
  const pathname = usePathname()
  const [locale, setLocale] = useState('en')
  const [messages, setMessages] = useState<T | null>(null)

  useEffect(() => {
    const potentialLocale = pathname.split('/')[1]
    const currentLocale = supportedLocales.includes(potentialLocale)
      ? potentialLocale
      : 'en'

    setLocale(currentLocale)

    const load = async () => {
      try {
        const mod = await import(`@/messages/${currentLocale}.json`)
        setMessages(mod.default as T)
      } catch (err) {
        console.error('Ошибка загрузки переводов:', err)
        setMessages({} as T)
      }
    }

    load()
  }, [pathname])

  return { locale, messages }
}

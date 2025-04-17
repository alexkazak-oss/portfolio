'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type FormCache = Record<string, string>

type FormCacheContextType = {
  data: FormCache
  setField: (key: string, value: string) => void
  clear: () => void
}

const FormCacheContext = createContext<FormCacheContextType | null>(null)

export const useFormCache = () => {
  const context = useContext(FormCacheContext)
  if (!context) {
    throw new Error('useFormCache must be used within a FormCacheProvider')
  }
  return context
}

export function FormCacheProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FormCache>({})

  useEffect(() => {
    const stored = localStorage.getItem('form-cache')
    if (stored) {
      setData(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('form-cache', JSON.stringify(data))
  }, [data])

  const setField = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const clear = () => {
    setData({})
    localStorage.removeItem('form-cache')
  }

  return (
    <FormCacheContext.Provider value={{ data, setField, clear }}>
      {children}
    </FormCacheContext.Provider>
  )
}

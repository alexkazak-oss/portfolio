'use client'
import { NextIntlClientProvider } from 'next-intl'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { useDynamicTranslations } from '@/shared/hooks/useDynamicTranslation'
import { Button } from '@/components/ui/button'
import { SheetSide, SocialsLinks, LanguageSelector } from './ui'
import { useBreakpoint } from '@/shared/providers'
interface HeaderMessages {
	title: string
	description: string
	links?: Record<string, string>
}

export default function Header() {
	const { locale, messages } = useDynamicTranslations<HeaderMessages>()
	const breakpoint = useBreakpoint()
	const isDesktop = breakpoint === 'desktop'

  if (!messages) return null

  return (
    <header className={`bg-black text-white z-500${
		isDesktop
			? 'w-[90px] flex flex-col items-center  px-4 py-10  justify-between h-screen fixed left-0 top-0'
			: 'w-screen h-[70px] top-0 left-0 px-10 py-4 flex items-center justify-between'
	}`}>
      <div className='text-lg font-bold'>GC</div>

      <NextIntlClientProvider locale={locale} messages={messages}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' className='w-[90px] h-[40px] bg-white text-black hover:bg-gray-200'>
              Menu
            </Button>
          </SheetTrigger>
          <SheetSide />
        </Sheet>

        <LanguageSelector />
      </NextIntlClientProvider>

      <SocialsLinks />
    </header>
  )
}

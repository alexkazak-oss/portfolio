'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SocialsLinks({ className }: { className?: string }) {

  const socialLink = [
    { label: 'I', href: '/instagram' },
    { label: 'T', href: '/telegram' },
    { label: 'L', href: '/linkedin' }
  ]



  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      {socialLink.map((link) => (
        <Button key={link.label} variant='ghost' size={'sm'} style={'rounded'} className='w-full' asChild>
          <Link href={link.href}>
          {link.label}
          </Link>
        </Button>
      ))}
    </div>
  )
}

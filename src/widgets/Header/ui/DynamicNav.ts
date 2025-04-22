import dynamic from 'next/dynamic'

export const DynamicNav = dynamic(() => import('./burger/nav/nav'), {
  ssr: false,
})

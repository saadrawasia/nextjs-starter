'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

import { HeroUIProvider } from '@heroui/react'

export default function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
}

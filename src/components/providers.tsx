import { ReactNode } from 'react'

import { HeroUIProvider } from '@heroui/react'

export default function Providers({ children }: { children: ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>
}

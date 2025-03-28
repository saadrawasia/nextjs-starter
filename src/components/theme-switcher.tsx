'use client'

import { useEffect, useState } from 'react'

import { Switch } from '@heroui/react'
import { IconMoon, IconSun } from '@tabler/icons-react'

import useSystemTheme from '@/hooks/use-system-theme'

export function ThemeSwitcher({ showLabel }: { showLabel?: boolean }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useSystemTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      isSelected={theme === 'light'}
      onValueChange={() =>
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }
      color="success"
      endContent={<IconSun />}
      size="lg"
      startContent={<IconMoon />}
    >
      {showLabel && 'Theme'}
    </Switch>
  )
}

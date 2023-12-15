import React from 'react'

import { useTheme } from 'styled-components'

import { ThemeType } from '@/lib/theming'

import { useGlobalTheme } from '@/contexts'

import { IconButton } from '@/components/IconButton'
import { IconComponent, MoonIcon, SunIcon } from '@/icons'

const iconByTheme: Record<ThemeType, IconComponent> = {
  dark: MoonIcon,
  light: SunIcon,
}

export const ThemeSwitcher = () => {
  const { themeToggle } = useGlobalTheme()
  const theme = useTheme()
  const Icon = iconByTheme[theme.type]

  return (
    <IconButton
      icon={Icon}
      onClick={themeToggle}
      size="small"
      variant="layerBased"
    />
  )
}

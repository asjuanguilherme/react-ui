import React from 'react'

import { ThemeType } from 'lib/theming'

import { useGlobalTheme } from 'contexts'

import { IconButton } from 'components/IconButton'
import { IconComponent, MoonIcon, SunIcon } from 'icons'

const iconByTheme: Record<ThemeType, IconComponent> = {
  dark: MoonIcon,
  light: SunIcon,
}

export const ThemeSwitcher = () => {
  const theme = useGlobalTheme()
  const Icon = iconByTheme[theme.type]

  return (
    <IconButton
      icon={Icon}
      onClick={theme.themeToggle}
      size="small"
      variant="layerBased"
    />
  )
}

import { IconButton } from 'components/IconButton'
import { IconComponent, MoonIcon, SunIcon } from 'icons'
import { useGlobalTheme } from 'contexts'
import { ThemeObject } from 'types'

const iconByTheme: Record<ThemeObject['type'], IconComponent> = {
  dark: MoonIcon,
  light: SunIcon,
}

export const ThemeSwitcher = () => {
  const theme = useGlobalTheme()
  const Icon = iconByTheme[theme.type]

  return (
    <IconButton
      onClick={theme.themeToggle}
      icon={Icon}
      variant="layerBased"
      size="small"
    />
  )
}

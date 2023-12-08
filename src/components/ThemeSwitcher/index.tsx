import { IconButton } from 'components/IconButton'
import { IconComponent, MoonIcon, SunIcon } from 'icons'
import { useGlobalTheme } from 'contexts'
import { ThemeType } from 'lib/theming'

const iconByTheme: Record<ThemeType, IconComponent> = {
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

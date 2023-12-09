import { darken, lighten } from 'polished'

export type GenerateThemeColorPaletteItemParams = {
  baseColor: string
  increment?: number
}

export type ThemeColorPaletteItem = {
  light: string
  normal: string
  dark: string
}

export const generateThemeColorPaletteItem = ({
  baseColor,
  increment = 0.1,
}: GenerateThemeColorPaletteItemParams): ThemeColorPaletteItem => {
  const light = lighten(increment, baseColor)
  const dark = darken(increment, baseColor)

  return {
    light,
    normal: baseColor,
    dark,
  }
}

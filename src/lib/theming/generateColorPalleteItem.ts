import { darken, lighten } from 'polished'

export type GenerateThemeColorPalleteItemParams = {
  baseColor: string
  increment?: number
}

export type ThemeColorPalleteItem = {
  light: string
  normal: string
  dark: string
}

export const generateThemeColorPalleteItem = ({
  baseColor,
  increment = 0.1,
}: GenerateThemeColorPalleteItemParams): ThemeColorPalleteItem => {
  const light = lighten(increment, baseColor)
  const dark = darken(increment, baseColor)

  return {
    light,
    normal: baseColor,
    dark,
  }
}

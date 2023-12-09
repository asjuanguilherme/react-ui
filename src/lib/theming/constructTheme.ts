import { poppinsFontFamily } from 'fonts/poppins'

import { defaultThemePalette } from './defaultThemePalette'
import { ThemeColorPaletteItem } from './generateColorPaletteItem'
import {
  GenerateThemeContentColorsParams,
  GenerateThemeLayersColorsParams,
  ThemeContentColor,
  ThemeLayersColors,
  generateThemeContentColors,
  generateThemeLayersColors,
} from './index'
import { ThemeTokens, constructThemeTokens } from './tokens'

export type ThemeType = 'dark' | 'light'

export type ThemePaletteColors = {
  primary: ThemeColorPaletteItem
  error: ThemeColorPaletteItem
  success: ThemeColorPaletteItem
  warning: ThemeColorPaletteItem
  info: ThemeColorPaletteItem
  [key: string]: ThemeColorPaletteItem
}

export type ConstructThemeParams = {
  type: ThemeType
  name: string
  colors: {
    palette?: ThemePaletteColors
    content: GenerateThemeContentColorsParams
    layers: GenerateThemeLayersColorsParams
  }
  fontFamily?: string
  tokens?: ThemeTokens
}

export type Theme = {
  type: ThemeType
  name: string
  colors: {
    content: ThemeContentColor
    layers: ThemeLayersColors
    palette: ThemePaletteColors
  }
  fontFamily: string
} & ThemeTokens

export const constructTheme = (args: ConstructThemeParams): Theme => {
  return {
    type: args.type,
    name: args.name,
    colors: {
      palette: args.colors.palette || defaultThemePalette,
      content: generateThemeContentColors(args.colors.content),
      layers: generateThemeLayersColors(args.colors.layers),
    },
    fontFamily: poppinsFontFamily.name,
    ...constructThemeTokens(args.tokens),
  }
}

import { DefaultTheme } from 'styled-components'

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
import {
  ButtonConfigToken,
  FieldConfigToken,
  ThemeTokens,
  constructThemeTokens,
} from './tokens'

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
  button?: Partial<ButtonConfigToken>
  field?: Partial<FieldConfigToken>
}

export type Theme = DefaultTheme & {
  type: ThemeType
  name: string
  colors: {
    content: ThemeContentColor
    layers: ThemeLayersColors
    palette: ThemePaletteColors
  }
  fontFamily: string
  button: ButtonConfigToken
  field: FieldConfigToken
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

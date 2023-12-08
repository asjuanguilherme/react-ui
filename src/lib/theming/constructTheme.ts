import {
  GenerateThemeContentColorsParams,
  GenerateThemeLayersColorsParams,
  ThemeColorPalleteItem,
  ThemeContentColor,
  ThemeLayersColors,
  defaultThemePallete,
  generateThemeContentColors,
  generateThemeLayersColors,
} from './index'
import { ThemeTokens, constructThemeTokens } from './tokens'

export type ThemeType = 'dark' | 'light'

export type ThemePalleteColors = {
  primary: ThemeColorPalleteItem
  error: ThemeColorPalleteItem
  success: ThemeColorPalleteItem
  warning: ThemeColorPalleteItem
  info: ThemeColorPalleteItem
  [key: string]: ThemeColorPalleteItem
}

export type ConstructThemeParams = {
  type: ThemeType
  name: string
  colors: {
    pallete?: ThemePalleteColors
    content: GenerateThemeContentColorsParams
    layers: GenerateThemeLayersColorsParams
  }
  tokens?: ThemeTokens
}

export type Theme = {
  type: ThemeType
  name: string
  colors: {
    content: ThemeContentColor
    layers: ThemeLayersColors
    pallete: ThemePalleteColors
  }
} & ThemeTokens

export const constructTheme = (args: ConstructThemeParams): Theme => {
  return {
    type: args.type,
    name: args.name,
    colors: {
      pallete: args.colors.pallete || defaultThemePallete,
      content: generateThemeContentColors(args.colors.content),
      layers: generateThemeLayersColors(args.colors.layers),
    },
    ...constructThemeTokens(args.tokens),
  }
}

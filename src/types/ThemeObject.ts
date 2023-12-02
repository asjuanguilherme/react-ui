import { colors } from 'styles/tokens'
import { ThemeColorsContent, ThemeColorsLayers } from './index'

export type ThemeObject = {
  type: 'dark' | 'light'
  name: string
  colors: {
    content: ThemeColorsContent
    layers: ThemeColorsLayers
    main: typeof colors
  }
}

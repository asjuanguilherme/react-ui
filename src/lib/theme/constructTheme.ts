import { ThemeObject } from '../../types/ThemeObject'
import { colors } from 'styles/tokens'
import { generateThemeContentColors, generateThemeLayers } from './index'

export type CreateThemeProps = {
  type: ThemeObject['type']
  name: string
  themeBaseColors: {
    content: string
    background: string
  }
}

export const constructTheme = (props: CreateThemeProps): ThemeObject => {
  return {
    name: props.name,
    type: props.type,
    colors: {
      main: colors,
      content: generateThemeContentColors(
        props.themeBaseColors.content,
        props.type,
      ),
      layers: generateThemeLayers(props.themeBaseColors.background, props.type),
    },
  }
}

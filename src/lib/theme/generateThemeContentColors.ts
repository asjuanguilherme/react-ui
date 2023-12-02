import { lighten } from 'polished'
import { ThemeColorsContent, ThemeObject } from '../../types'

const incrementValuesByType = {
  light: {
    text: 0.06,
    detail: 0.1,
  },
  dark: {
    text: -0.2,
    detail: -0.4,
  },
}

export const generateThemeContentColors = (
  colorBase: string,
  type: ThemeObject['type'],
): ThemeColorsContent => {
  const incrementFn = lighten
  const incrementValues = incrementValuesByType[type]

  return {
    title: colorBase,
    text: incrementFn(incrementValues.text, colorBase) as string,
    detail: incrementFn(incrementValues.detail, colorBase) as string,
  }
}

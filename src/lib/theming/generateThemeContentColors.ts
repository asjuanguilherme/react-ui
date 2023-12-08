import { lighten } from 'polished'

export type ThemeContentColor = {
  title: string
  text: string
  detail: string
}

export type GenerateThemeContentColorsParams = {
  baseColor: string
  increment: {
    text: number
    detail: number
  }
}

export const generateThemeContentColors = ({
  baseColor,
  increment,
}: GenerateThemeContentColorsParams): ThemeContentColor => {
  return {
    title: baseColor,
    text: lighten(increment.text, baseColor) as string,
    detail: lighten(increment.detail, baseColor) as string,
  }
}

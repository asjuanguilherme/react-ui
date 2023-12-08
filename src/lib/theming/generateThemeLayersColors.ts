import { lighten } from 'polished'

export type ThemeLayerColor = {
  hoveredBackground: string
  background: string
  border: string
  _nextLayerColor: string
}

export type ThemeLayerIndex = 0 | 1 | 2

export type ThemeLayersColors = Record<ThemeLayerIndex, ThemeLayerColor>

export type ThemeLayerIncrementation = Record<
  'border' | 'hoveredBackground' | 'nextLayerColor',
  number
>

export type ThemeLayerParams = {
  baseColor: string
  increment: ThemeLayerIncrementation
}

export type GenerateThemeLayersColorsParams = ThemeLayerParams & {
  alternate?: boolean
  reverse?: boolean
}

export const generateThemeLayerColor = ({
  baseColor,
  increment,
}: GenerateThemeLayersColorsParams): ThemeLayerColor => {
  return {
    background: baseColor,
    border: lighten(increment.border, baseColor) + '',
    hoveredBackground: lighten(increment.hoveredBackground, baseColor) + '',
    _nextLayerColor: lighten(increment.nextLayerColor, baseColor) + '',
  }
}

export const generateThemeLayersColors = ({
  baseColor,
  increment,
  alternate,
  reverse,
}: GenerateThemeLayersColorsParams): ThemeLayersColors => {
  let currentBaseColor = baseColor + ''
  const layers = []

  for (let i = 0; i <= 2; i++) {
    const layerProps = generateThemeLayerColor({
      baseColor: currentBaseColor,
      increment,
    })
    layers[i] = layerProps
    currentBaseColor = layerProps._nextLayerColor
  }

  if (alternate)
    return {
      0: layers[0],
      1: layers[1],
      2: layers[0],
    }

  if (reverse)
    return {
      0: layers[2],
      1: layers[1],
      2: layers[0],
    }

  return {
    0: layers[0],
    1: layers[1],
    2: layers[2],
  }
}

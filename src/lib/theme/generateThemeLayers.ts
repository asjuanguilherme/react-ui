import { darken, lighten } from 'polished'
import { ThemeColorsLayer, ThemeColorsLayers, ThemeObject } from '../../types'

type LayerIncrementationConfig = Record<
  'border' | 'hoveredBackground' | 'nextLayerColor',
  number
>

const incrementFnByThemeType = {
  light: darken,
  dark: lighten,
}

const incrementationByThemeType: Record<
  ThemeObject['type'],
  LayerIncrementationConfig
> = {
  light: {
    border: 0.04,
    hoveredBackground: 0.05,
    nextLayerColor: 0.07,
  },
  dark: {
    border: 0.05,
    hoveredBackground: 0.07,
    nextLayerColor: 0.09,
  },
}

export const generateThemeLayerProperties = (
  baseColor: string,
  type: ThemeObject['type'],
): ThemeColorsLayer => {
  const incrementFn = incrementFnByThemeType[type]
  const incrementationConfig = incrementationByThemeType[type]

  return {
    background: baseColor,
    border: incrementFn(incrementationConfig.border, baseColor) + '',
    hoveredBackground:
      incrementFn(incrementationConfig.hoveredBackground, baseColor) + '',
    _nextLayerColor:
      incrementFn(incrementationConfig.nextLayerColor, baseColor) + '',
  }
}

export const generateThemeLayers = (
  baseColor: string,
  type: ThemeObject['type'],
): ThemeColorsLayers => {
  let currentBaseColor = baseColor + ''
  const layers = []

  for (let i = 0; i <= 2; i++) {
    const layerProps = generateThemeLayerProperties(currentBaseColor, type)
    layers[i] = layerProps
    currentBaseColor = layerProps._nextLayerColor
  }

  return layers as unknown as ThemeColorsLayers
}

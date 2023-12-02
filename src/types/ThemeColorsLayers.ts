export type ThemeColorsLayer = {
  hoveredBackground: string
  background: string
  border: string
  _nextLayerColor: string
}

export type LayerIndex = 0 | 1 | 2

export type ThemeColorsLayers = Record<LayerIndex, ThemeColorsLayer>

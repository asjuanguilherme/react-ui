import { constructTheme } from '..'

export const defaultDarkTheme = constructTheme({
  type: 'dark',
  name: 'default_dark',
  colors: {
    content: {
      baseColor: '#ffffff',
      increment: {
        text: -0.2,
        detail: -0.4,
      },
    },
    layers: {
      baseColor: '#000000',
      increment: {
        border: 0.05,
        hoveredBackground: 0.07,
        nextLayerColor: 0.09,
      },
    },
  },
})

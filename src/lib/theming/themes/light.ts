import { constructTheme } from '..'

export const defaultLightTheme = constructTheme({
  type: 'dark',
  name: 'default-light',
  colors: {
    content: {
      baseColor: '#000000',
      increment: {
        text: 0.06,
        detail: 0.1,
      },
    },
    layers: {
      baseColor: '#FFFFFF',
      increment: {
        border: 0.04,
        hoveredBackground: 0.05,
        nextLayerColor: 0.07,
      },
    },
  },
})

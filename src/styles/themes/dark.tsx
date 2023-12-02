import { constructTheme } from '../../lib/theme'

export const darkTheme = constructTheme({
  name: 'dark',
  type: 'dark',
  themeBaseColors: {
    background: '#000000',
    content: '#FFFFFF',
  },
})

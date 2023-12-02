import { constructTheme } from '../../lib/theme'

export const lightTheme = constructTheme({
  name: 'light',
  type: 'light',
  themeBaseColors: {
    background: '#FFFFFF',
    content: '#000000',
  },
})

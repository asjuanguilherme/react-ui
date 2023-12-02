import { lightTheme } from './light'
import { darkTheme } from './dark'

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export type Theme = keyof typeof themes

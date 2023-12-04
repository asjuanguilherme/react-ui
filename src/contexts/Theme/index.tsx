export * from './utils'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { DEFAULT_THEME, getThemeCookie, saveThemeCookie } from './utils'
import { Theme, themes } from 'styles'
import { ThemeObject } from 'types'
import { ThemeProvider } from 'styled-components'

export type GlobalThemeContextProps = ThemeObject & {
  themeToggle: () => void
}

export type GlobalThemeProviderProps = {
  children: ReactNode
  themeCookie?: Theme
}

export const GlobalThemeContext = createContext<GlobalThemeContextProps>(
  {} as GlobalThemeContextProps,
)

export const useGlobalTheme = () => {
  const context = useContext(GlobalThemeContext)

  if (!context)
    throw new Error(
      'useGlobalTheme hook must be used inside the GlobalThemeProvider.',
    )

  return context
}

export const GlobalThemeProvider = ({
  children,
  themeCookie,
}: GlobalThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(
    themeCookie || DEFAULT_THEME,
  )

  const themeToggle = () => {
    const newTheme = selectedTheme === 'dark' ? 'light' : 'dark'
    setSelectedTheme(newTheme)
    saveThemeCookie(newTheme)
  }

  const selectedThemeData = useMemo(
    () => themes[selectedTheme || DEFAULT_THEME],
    [selectedTheme],
  )

  useEffect(() => {
    setSelectedTheme(getThemeCookie())
  }, [])

  return (
    <GlobalThemeContext.Provider value={{ ...selectedThemeData, themeToggle }}>
      <ThemeProvider theme={selectedThemeData}>{children}</ThemeProvider>
    </GlobalThemeContext.Provider>
  )
}

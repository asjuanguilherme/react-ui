export * from './utils'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Theme } from 'lib/theming'
import { ThemeProvider } from 'styled-components'

import { getThemeCookie, saveThemeCookie } from './utils'

export type GlobalThemeContextProps = Theme & {
  themeToggle: () => void
}

export type GlobalThemeProviderProps<T extends Record<string, Theme>> = {
  children: (theme: Theme) => ReactNode
  themeCookieKey?: string
  themes: T
  selectedTheme: keyof T
}

export const GlobalThemeContext = createContext<GlobalThemeContextProps>(
  {} as GlobalThemeContextProps,
)

export const useGlobalTheme = () => {
  const context = useContext(GlobalThemeContext)

  if (!context) {
    throw new Error(
      'useGlobalTheme hook must be used inside the GlobalThemeProvider.',
    )
  }

  return context
}

export const GlobalThemeProvider = <T extends Record<string, Theme>>({
  children,
  themeCookieKey = 'theme',
  themes,
  selectedTheme,
}: GlobalThemeProviderProps<T>) => {
  const [currentTheme, setCurrentTheme] = useState<keyof T>(selectedTheme)

  const themeToggle = () => {
    const themeKeys = Object.keys(themes) as Array<keyof T>
    const currentIndex = themeKeys.indexOf(currentTheme)
    const nextIndex = currentIndex < themeKeys.length - 1 ? currentIndex + 1 : 0

    const newTheme = themeKeys[nextIndex] as keyof T

    setCurrentTheme(newTheme)
    saveThemeCookie({
      theme: newTheme,
      ctx: undefined,
      themeCookieKey,
      themes,
    })
  }

  const selectedThemeData = useMemo(
    () => themes[currentTheme],
    [currentTheme, themes],
  )

  useEffect(() => {
    setCurrentTheme(
      getThemeCookie({
        ctx: undefined,
        themeCookieKey,
        themes,
      }),
    )
  }, [themeCookieKey, themes])

  return (
    <GlobalThemeContext.Provider value={{ ...selectedThemeData, themeToggle }}>
      <ThemeProvider theme={selectedThemeData}>
        {children(selectedThemeData)}
      </ThemeProvider>
    </GlobalThemeContext.Provider>
  )
}

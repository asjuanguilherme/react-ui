import { parseCookies, setCookie } from 'nookies'
import { GetServerSidePropsContext } from 'next'
import { Theme } from 'lib/theming'
import { objectKeys } from '@asjuanguilherme/js-utils'

type ThemeCookieOptions<T extends Record<string, Theme>> = {
  ctx?: GetServerSidePropsContext
  themeCookieKey?: string
  theme: keyof T
  themes: T
}

const isValidTheme = <T extends Record<string, Theme>>(
  newTheme: keyof T,
  themes: T,
): boolean => {
  const validThemes = objectKeys(themes)
  return validThemes.includes(newTheme)
}

export const saveThemeCookie = <T extends Record<string, Theme>>({
  theme,
  ctx,
  themeCookieKey = 'theme',
  themes,
}: ThemeCookieOptions<T>): keyof T => {
  if (!isValidTheme(theme, themes)) {
    const defaultTheme = objectKeys(themes)[0] as keyof T
    console.warn(
      `The provided theme (${
        theme as string
      }) is invalid; using the default theme (${
        defaultTheme as string
      }) and saving the cookie.`,
    )
    setCookie(ctx, themeCookieKey, defaultTheme as string)
    return defaultTheme
  }

  setCookie(ctx, themeCookieKey, theme as string)
  return theme
}

type GetThemeCookieOptions<T extends Record<string, Theme>> = {
  ctx?: GetServerSidePropsContext
  themeCookieKey?: string
  themes: T
}

export const getThemeCookie = <T extends Record<string, Theme>>({
  ctx,
  themeCookieKey = 'theme',
  themes,
}: GetThemeCookieOptions<T>): keyof T => {
  const cookies = parseCookies(ctx)
  const savedThemeCookie = cookies[themeCookieKey]

  if (!savedThemeCookie || !isValidTheme(savedThemeCookie, themes)) {
    const defaultTheme = objectKeys(themes)[0] as keyof T
    console.warn(
      `The saved theme is invalid; using the default theme (${
        defaultTheme as string
      }) and saving the cookie.`,
    )
    setCookie(ctx, themeCookieKey, defaultTheme as string)
    return defaultTheme
  }

  return savedThemeCookie as keyof T
}

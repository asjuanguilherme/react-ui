import { parseCookies, setCookie } from 'nookies'
import { Theme } from '../../styles/themes'
import { GetServerSidePropsContext } from 'next'

export const THEME_COOKIE_KEY = 'theme'
export const DEFAULT_THEME = 'dark'

export const validThemes: Theme[] = ['light', 'dark']

export const saveThemeCookie = (
  theme: string,
  ctx?: GetServerSidePropsContext,
) => {
  let themeToBeStored = theme

  if (!validThemes.some(validTheme => validTheme === theme)) {
    console.warn(
      `An invalid theme was passed to saveThemeCookie, the default theme (${DEFAULT_THEME}) was used instead.`,
    )
    themeToBeStored = DEFAULT_THEME
  }

  setCookie(ctx, THEME_COOKIE_KEY, themeToBeStored)
}

export const getThemeCookie = (ctx?: GetServerSidePropsContext) => {
  const cookies = parseCookies(ctx)
  const savedThemeCookie = cookies[THEME_COOKIE_KEY]

  if (
    !savedThemeCookie ||
    !validThemes.some(validTheme => validTheme === savedThemeCookie)
  ) {
    console.warn(
      `There is no valid theme saved; the default theme (${DEFAULT_THEME}) was used instead.`,
    )

    saveThemeCookie(DEFAULT_THEME, ctx)
    return DEFAULT_THEME
  }

  return savedThemeCookie as Theme
}

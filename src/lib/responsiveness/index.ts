import { css, Interpolation } from 'styled-components'
import { objectKeys } from '@asjuanguilherme/js-utils'

export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletS: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
  desktopL: 1536,
} as const

export const validBreakpointNames = objectKeys(breakpoints)

const breakpointUp = (value: number) =>
  `@media screen and (min-width: ${value}px)`

export const screens = {
  mobileS_Up: breakpointUp(breakpoints.mobileS),
  mobileM_Up: breakpointUp(breakpoints.mobileM),
  mobileL_Up: breakpointUp(breakpoints.mobileL),
  tabletS_Up: breakpointUp(breakpoints.tabletS),
  tablet_Up: breakpointUp(breakpoints.tablet),
  laptop_Up: breakpointUp(breakpoints.laptop),
  desktop_Up: breakpointUp(breakpoints.desktop),
  desktopL_Up: breakpointUp(breakpoints.desktopL),
} as const

export const screenUp = (breakpoint: keyof typeof breakpoints | number) => {
  const breakpointValue = (() => {
    if (typeof breakpoint === 'number') return breakpoint

    if (
      validBreakpointNames.some(
        validBreakpoint => validBreakpoint === breakpoint,
      )
    )
      return breakpoints[breakpoint]

    throw new Error(
      `Insert a valid breakpoint on "breakpointUp" function. Valid breakpoints are: ${validBreakpointNames.join(
        ', ',
      )} or number value.`,
    )
  })()

  return (cssStyle: Interpolation<any>) => {
    return css`
      ${breakpointUp(breakpointValue)} {
        ${cssStyle}
      }
    `
  }
}

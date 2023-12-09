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
  mobileS: breakpointUp(breakpoints.mobileS),
  mobileM: breakpointUp(breakpoints.mobileM),
  mobileL: breakpointUp(breakpoints.mobileL),
  tabletS: breakpointUp(breakpoints.tabletS),
  tablet: breakpointUp(breakpoints.tablet),
  laptop: breakpointUp(breakpoints.laptop),
  desktop: breakpointUp(breakpoints.desktop),
  desktopL: breakpointUp(breakpoints.desktopL),
} as const

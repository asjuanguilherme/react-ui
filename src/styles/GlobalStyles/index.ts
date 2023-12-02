import { createGlobalStyle } from 'styled-components'
import { fontFaces, resets, customScrollbar } from './partials'

export const GlobalStyles = createGlobalStyle`
  ${fontFaces}
  ${resets}
  ${customScrollbar}
`

import { createGlobalStyle } from 'styled-components'

import { customScrollbar, fontFaces, resets } from './partials'

export const GlobalStyles = createGlobalStyle`
  ${fontFaces}
  ${resets}
  ${customScrollbar}
`

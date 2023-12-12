import { createGlobalStyle } from 'styled-components'

import { customScrollbar, resets } from './partials'

export const GlobalStyles = createGlobalStyle`
  ${resets}
  ${customScrollbar}
`

import {} from 'styled-components'
import { Theme } from './lib/theming'
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

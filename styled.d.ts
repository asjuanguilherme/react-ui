import {} from 'styled-components'
import { Theme } from './src/lib/theming'
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

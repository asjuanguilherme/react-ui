import {} from 'styled-components'
import { ThemeObject } from '../src/types/ThemeObject'
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {}
}

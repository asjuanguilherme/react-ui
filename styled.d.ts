import {} from 'styled-components'
import { Theme } from '~/lib'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

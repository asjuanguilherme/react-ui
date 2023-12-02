import { LayerIndex } from 'types'
import * as S from './styles'

export type MenuDividerProps = {
  layer?: LayerIndex
}

export const MenuDivider = ({ layer = 1 }: MenuDividerProps) => {
  return <S.Wrapper $layer={layer}></S.Wrapper>
}

import React from 'react'

import * as S from './styles'

import { ThemeLayerIndex } from 'lib/theming'

export type MenuDividerProps = {
  layer?: ThemeLayerIndex
}

export const MenuDivider = ({ layer = 1 }: MenuDividerProps) => {
  return <S.Wrapper $layer={layer}></S.Wrapper>
}

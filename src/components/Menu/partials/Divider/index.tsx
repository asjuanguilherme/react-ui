import React from 'react'

import { ThemeLayerIndex } from '~/lib/theming'

import * as S from './styles'

export type MenuDividerProps = {
  layer?: ThemeLayerIndex
}

export const MenuDivider = ({ layer = 1 }: MenuDividerProps) => {
  return <S.Wrapper $layer={layer} />
}

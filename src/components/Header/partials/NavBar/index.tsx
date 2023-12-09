import React, { ReactNode } from 'react'

import * as S from './styles'

export type HeaderNavbarProps = {
  children?: ReactNode
}

export const HeaderNavbar = ({ children }: HeaderNavbarProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

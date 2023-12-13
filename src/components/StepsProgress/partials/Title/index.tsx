import React, { ReactNode } from 'react'
import * as S from './styles'

export type StepsProgressTitleProps = {
  children: ReactNode
}

export const StepsProgressTitle = ({ children }: StepsProgressTitleProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

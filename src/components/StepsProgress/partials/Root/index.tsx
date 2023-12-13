import React, { ReactNode } from 'react'
import * as S from './styles'

export type StepsProgressRootProps = { children: ReactNode }

export const StepsProgressRoot = ({ children }: StepsProgressRootProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

import React, { ReactNode } from 'react'
import * as S from './styles'

export type StepsProgressStepListProps = {
  children: ReactNode
}

export const StepsProgressStepList = ({
  children,
}: StepsProgressStepListProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

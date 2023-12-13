import React, { ReactNode } from 'react'

import { StepsProgressDirection } from '../Root'

import * as S from './styles'

export type StepsProgressStepListProps = {
  children: ReactNode
  direction?: StepsProgressDirection
}

export const StepsProgressStepList = ({
  children,
  direction = 'row',
}: StepsProgressStepListProps) => {
  return <S.Wrapper $direction={direction}>{children}</S.Wrapper>
}

import React, { ReactNode } from 'react'

import { Heading } from 'components/Heading'

import * as S from './styles'

export type StepsProgressTitleProps = {
  children: ReactNode
}

export const StepsProgressTitle = ({ children }: StepsProgressTitleProps) => {
  return (
    <S.Wrapper>
      <Heading level={2} tag="span">
        {children}
      </Heading>
    </S.Wrapper>
  )
}

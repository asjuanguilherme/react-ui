import * as S from './styles'

import React, { ReactNode, useState } from 'react'

import { HTMLStyleAttributes } from 'types'
import _uniqueId from 'lodash/uniqueId'

export type ShortInfoProps = {
  title: string
  children: ReactNode
} & HTMLStyleAttributes

export const ShortInfo = ({ title, children, ...props }: ShortInfoProps) => {
  const [htmlId] = useState(_uniqueId('short-info-'))

  return (
    <S.Wrapper {...props}>
      <S.Title id={htmlId + 'title'}>{title}</S.Title>
      <S.Content aria-labelledby={htmlId + 'title'}>{children}</S.Content>
    </S.Wrapper>
  )
}

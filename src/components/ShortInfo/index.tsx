import React, { ReactNode, useState } from 'react'

import _uniqueId from 'lodash/uniqueId'
import { HTMLStyleAttributes } from 'types'

import * as S from './styles'

export type ShortInfoProps = {
  title: string
  children: ReactNode
  highlightContent?: boolean
} & HTMLStyleAttributes

export const ShortInfo = ({
  title,
  children,
  highlightContent = false,
  ...props
}: ShortInfoProps) => {
  const [htmlId] = useState(_uniqueId('short-info-'))

  return (
    <S.Wrapper {...props}>
      <S.Title id={htmlId + 'title'}>{title}</S.Title>
      <S.Content
        $highlightContent={highlightContent}
        aria-labelledby={htmlId + 'title'}
      >
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

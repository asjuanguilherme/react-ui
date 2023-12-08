import * as S from './styles'
import { ReactNode, useState } from 'react'
import _uniqueId from 'lodash/uniqueId'
import { HTMLStyleAttributes } from 'types'

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
        aria-labelledby={htmlId + 'title'}
        $highlightContent={highlightContent}
      >
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

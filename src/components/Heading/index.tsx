import React, { ReactNode } from 'react'

import { HTMLStyleAttributes } from 'types'

import * as S from './styles'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type HeadingTag = keyof HTMLElementTagNameMap

export type HeadingProps = {
  children?: ReactNode
  level?: HeadingLevel
  tag?: HeadingTag
} & HTMLStyleAttributes

export const Heading = ({
  level = 1,
  children,
  tag,
  ...props
}: HeadingProps) => {
  return (
    <S.Wrapper {...props} $level={level} as={tag ? tag : 'h' + level}>
      {children}
    </S.Wrapper>
  )
}

import React from 'react'
import { ReactNode } from 'react'

import { HTMLStyleAttributes } from '~/types'

import { breakpoints } from '~/lib/responsiveness'

import * as S from './styles'

export type ContainerProps = {
  children?: ReactNode
  variant?: keyof typeof breakpoints
} & HTMLStyleAttributes

export const Container = ({
  children,
  className,
  style,
  variant,
}: ContainerProps) => {
  return (
    <S.Wrapper $variant={variant} className={className} style={style}>
      {children}
    </S.Wrapper>
  )
}

import * as S from './styles'
import { HTMLStyleAttributes } from '../../types'
import React, { ReactNode } from 'react'
import { breakpoints } from 'styles/tokens'

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
    <S.Wrapper className={className} style={style} $variant={variant}>
      {children}
    </S.Wrapper>
  )
}

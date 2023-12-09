import React, { HTMLAttributes, ReactNode } from 'react'

import { ThemeLayerIndex } from 'lib/theming'

import * as S from './styles'

export type CardBaseProps = {
  layer?: ThemeLayerIndex
  hoverable?: boolean
  children?: ReactNode
  roundedCorners?: 'small' | 'medium' | 'large' | 'none'
  tag?: keyof HTMLElementTagNameMap
} & HTMLAttributes<HTMLDivElement>

export const CardBase = ({
  layer = 1,
  hoverable = false,
  children,
  roundedCorners = 'medium',
  tag,
  ...props
}: CardBaseProps) => {
  return (
    <S.Wrapper
      {...props}
      $hoverable={hoverable}
      $layer={layer}
      $roundedCorners={roundedCorners}
      as={tag}
    >
      {children}
    </S.Wrapper>
  )
}

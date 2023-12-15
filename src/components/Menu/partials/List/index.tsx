import React from 'react'
import { ReactNode } from 'react'

import { HTMLStyleAttributes } from '@/types'

import * as S from './styles'

export type MenuListProps = {
  direction?: 'row' | 'column'
  maxHeight?: number
  children?: ReactNode
  noPadding?: boolean
} & HTMLStyleAttributes

export const MenuList = ({
  direction = 'column',
  maxHeight = 300,
  children,
  noPadding = false,
  ...props
}: MenuListProps) => {
  return (
    <S.Wrapper
      $direction={direction}
      $maxHeight={maxHeight}
      $noPadding={noPadding}
      {...props}
    >
      {children}
    </S.Wrapper>
  )
}

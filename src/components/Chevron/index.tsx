import React from 'react'

import * as S from './styles'

import { HTMLStyleAttributes } from 'types'

export type ChevronDirection = 'top' | 'right' | 'down' | 'left'

export type ChevronProps = {
  active?: boolean
  defaultDirection?: ChevronDirection
  activeDirection?: ChevronDirection
} & HTMLStyleAttributes

export const Chevron = ({
  active,
  defaultDirection = 'top',
  activeDirection = 'down',
  ...props
}: ChevronProps) => {
  return (
    <S.ChevronIcon
      $direction={active ? activeDirection : defaultDirection}
      {...props}
    />
  )
}

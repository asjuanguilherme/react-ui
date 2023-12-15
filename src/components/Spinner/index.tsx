import React from 'react'

import { HTMLStyleAttributes } from '@/types'

import * as S from './styles'

export type SpinnerSize =
  | 'extra-small'
  | 'small'
  | 'default'
  | 'large'
  | 'extra-large'

export type SpinnerProps = {
  size?: SpinnerSize
  color?: 'primary' | 'white'
} & HTMLStyleAttributes

const sizes: Record<SpinnerSize, number> = {
  'extra-small': 16,
  small: 32,
  default: 48,
  large: 72,
  'extra-large': 108,
}

export const Spinner = ({
  size = 'default',
  className,
  color = 'primary',
  style,
}: SpinnerProps) => {
  const sizeWidth = sizes[size]
  const strokeWidth = sizeWidth / 10

  return (
    <svg
      className={className}
      height={sizeWidth}
      style={style}
      viewBox={`0 0 ${sizeWidth} ${sizeWidth}`}
      width={sizeWidth}
      x={0}
      y={0}
    >
      <S.Circle
        $size={sizeWidth}
        $strokeWidth={strokeWidth}
        cx={sizeWidth / 2}
        cy={sizeWidth / 2}
        r={(sizeWidth - strokeWidth) / 2}
        stroke={color}
      />
    </svg>
  )
}

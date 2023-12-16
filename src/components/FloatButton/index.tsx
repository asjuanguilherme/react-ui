import React from 'react'

import { IconButtonProps } from '~/components/IconButton'

import * as S from './styles'

type FloatButtonYAxisDefined =
  | {
      top: number
      bottom?: never
    }
  | {
      top?: never
      bottom: number
    }

type FloatButtonXAxisDefined =
  | {
      left: number
      right?: never
    }
  | {
      right: number
      left?: never
    }

type FloatButtonPositionDefined = FloatButtonXAxisDefined &
  FloatButtonYAxisDefined

type FloatButtonPositionUndefined = {
  top?: undefined
  bottom?: undefined
  right?: undefined
  left?: undefined
}

export type FloatButtonProps = IconButtonProps & {
  zIndex?: number
} & (FloatButtonPositionUndefined | FloatButtonPositionDefined)

export const FloatButton = ({
  left,
  top,
  bottom,
  right,
  zIndex,
  ...props
}: FloatButtonProps) => {
  return (
    <S.Wrapper
      $bottom={bottom}
      $left={left}
      $right={right}
      $top={top}
      $zIndex={zIndex}
      {...props}
    />
  )
}

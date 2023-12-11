import React, { ReactNode } from 'react'

import { HTMLStyleAttributes } from 'types'

import { ThemeLayerIndex } from 'lib/theming'

import * as S from './styles'

export type PopoverBoxHorizontalAlignment = 'right' | 'center' | 'left'

export type PopoverBoxVerticalAlignment = 'top' | 'bottom'

export type PopoverBoxProps = {
  visible?: boolean
  maxHeight?: number
  maxWidth?: number
  layer?: ThemeLayerIndex
  children?: ReactNode
  horizontalAlignment?: PopoverBoxHorizontalAlignment
  verticalAlignment?: PopoverBoxVerticalAlignment
} & HTMLStyleAttributes

export const PopoverBox = ({
  children,
  visible = false,
  layer = 1,
  maxHeight,
  horizontalAlignment = 'center',
  verticalAlignment = 'top',
  maxWidth,
  ...props
}: PopoverBoxProps) => {
  return (
    <S.Wrapper $visible={visible} {...props}>
      <S.Box
        $horizontalAlignment={horizontalAlignment}
        $layer={layer}
        $maxHeight={maxHeight}
        $maxWidth={maxWidth}
        $verticalAlignment={verticalAlignment}
        $visible={visible}
      >
        {children}
      </S.Box>
    </S.Wrapper>
  )
}

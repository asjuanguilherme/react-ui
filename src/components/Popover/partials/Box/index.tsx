import React, { ReactNode } from 'react'

import { HTMLStyleAttributes } from 'types'

import { ThemeLayerIndex } from 'lib/theming'

import * as S from './styles'

export type PopoverBoxHorizontalAlignment = 'right' | 'center' | 'left'

export type PopoverBoxVerticalAlignment = 'top' | 'bottom'

export type PopoverBoxProps = {
  onClose: () => void
  visible: boolean
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
  onClose,
  ...props
}: PopoverBoxProps) => {
  return (
    <S.Wrapper $visible={visible} onClick={onClose} {...props}>
      <S.Box
        $horizontalAlignment={horizontalAlignment}
        $maxHeight={maxHeight}
        $maxWidth={maxWidth}
        $verticalAlignment={verticalAlignment}
        $visible={visible}
        boxShadow
        layer={layer}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </S.Box>
    </S.Wrapper>
  )
}

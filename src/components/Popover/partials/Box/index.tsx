import React, { ReactNode } from 'react'

import { HTMLStyleAttributes } from '~/types'

import { ThemeLayerIndex } from '~/lib/theming'

import * as S from './styles'

export type PopoverAlignmentForVerticalDirections = 'left' | 'center' | 'right'

export type PopoverAlignmentForHorizontalDirections =
  | 'top'
  | 'center'
  | 'bottom'

export type PopoverVerticalDirections = 'top' | 'bottom'

export type PopoverHorizontalDirections = 'left' | 'right'

export type PopoverBoxAlignment =
  | PopoverAlignmentForVerticalDirections
  | PopoverAlignmentForHorizontalDirections

export type PopoverBoxDirections =
  | PopoverVerticalDirections
  | PopoverHorizontalDirections

export type PopoverCommonProps = {
  onClose: () => void
  visible: boolean
  maxHeight?: number
  maxWidth?: number
  layer?: ThemeLayerIndex
  children?: ReactNode
  alignment?: PopoverBoxAlignment
  direction?: PopoverBoxDirections
} & HTMLStyleAttributes

export type PopoverBoxHorizontalDirectionProps = PopoverCommonProps & {
  direction?: PopoverHorizontalDirections
  alignment?: PopoverAlignmentForHorizontalDirections
}

export type PopoverBoxVerticalDirectionProps = PopoverCommonProps & {
  direction?: PopoverVerticalDirections
  alignment?: PopoverAlignmentForVerticalDirections
}

export type PopoverBoxProps =
  | PopoverBoxHorizontalDirectionProps
  | PopoverBoxVerticalDirectionProps

export const PopoverBox = ({
  children,
  visible = false,
  layer = 1,
  maxHeight,
  alignment = 'center',
  direction = 'bottom',
  maxWidth,
  onClose,
  ...props
}: PopoverBoxProps) => {
  return (
    <S.Wrapper $visible={visible} onClick={onClose} {...props}>
      <S.Box
        $alignment={alignment}
        $maxHeight={maxHeight}
        $maxWidth={maxWidth}
        $visible={visible}
        $direction={direction}
        boxShadow
        layer={layer}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </S.Box>
    </S.Wrapper>
  )
}

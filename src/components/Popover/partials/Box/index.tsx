import { ReactNode } from 'react'
import * as S from './styles'
import { ThemeLayerIndex } from 'lib/theming'
import { HTMLStyleAttributes } from 'types'

export type PopoverBoxHorizontalAlignment = 'right' | 'center' | 'left'

export type PopoverBoxVerticalAlignment = 'top' | 'bottom'

export type PopoverBoxProps = {
  visible?: boolean
  maxHeight?: number
  layer?: ThemeLayerIndex
  children?: ReactNode
  horizontalAlignment?: PopoverBoxHorizontalAlignment
  verticalAlignment?: PopoverBoxVerticalAlignment
} & HTMLStyleAttributes

export const PopoverBox = ({
  children,
  visible = false,
  layer = 1,
  maxHeight = 300,
  horizontalAlignment = 'center',
  verticalAlignment = 'top',
  ...props
}: PopoverBoxProps) => {
  return (
    <S.Wrapper $visible={visible} {...props}>
      <S.Box
        $visible={visible}
        $layer={layer}
        $horizontalAlignment={horizontalAlignment}
        $verticalAlignment={verticalAlignment}
      >
        {children}
      </S.Box>
    </S.Wrapper>
  )
}

import { ReactNode } from 'react'
import * as S from './styles'
import { LayerIndex } from 'types'
import { HTMLStyleAttributes } from 'types'

export type PopoverBoxProps = {
  visible?: boolean
  maxHeight?: number
  layer?: LayerIndex
  children?: ReactNode
} & HTMLStyleAttributes

export const PopoverBox = ({
  children,
  visible = false,
  layer = 1,
  maxHeight = 300,
  ...props
}: PopoverBoxProps) => {
  return (
    <S.Wrapper $visible={visible} {...props}>
      <S.Box $visible={visible} $layer={layer}>
        {children}
      </S.Box>
    </S.Wrapper>
  )
}

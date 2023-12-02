import { ReactNode } from 'react'
import * as S from './styles'
import { HTMLStyleAttributes } from 'types'

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
      $maxHeight={maxHeight}
      $direction={direction}
      $noPadding={noPadding}
      {...props}
    >
      {children}
    </S.Wrapper>
  )
}

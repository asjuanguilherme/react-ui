import { HTMLAttributes, ReactNode } from 'react'
import * as S from './styles'
import { LayerIndex } from 'types'

export type CardBaseProps = {
  layer?: LayerIndex
  hoverable?: boolean
  children?: ReactNode
  roundedCorners?: 'small' | 'medium' | 'large' | 'none'
  tag?: keyof HTMLElementTagNameMap
} & HTMLAttributes<HTMLDivElement>

export const CardBase = ({
  layer = 1,
  hoverable = false,
  children,
  roundedCorners = 'medium',
  tag,
  ...props
}: CardBaseProps) => {
  return (
    <S.Wrapper
      {...props}
      as={tag}
      $layer={layer}
      $hoverable={hoverable}
      $roundedCorners={roundedCorners}
    >
      {children}
    </S.Wrapper>
  )
}

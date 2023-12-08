import { breakpoints } from 'lib/responsiveness'
import * as S from './styles'
import { ReactNode } from 'react'
import { HTMLStyleAttributes } from 'types'

export type ContainerProps = {
  children?: ReactNode
  variant?: keyof typeof breakpoints
} & HTMLStyleAttributes

export const Container = ({
  children,
  className,
  style,
  variant,
}: ContainerProps) => {
  return (
    <S.Wrapper className={className} style={style} $variant={variant}>
      {children}
    </S.Wrapper>
  )
}

import React, { ReactNode } from 'react'
import * as S from './styles'
import { HTMLStyleAttributes } from 'types'

export type FormFieldRootProps = {
  fillWidth?: boolean
  children?: ReactNode
} & HTMLStyleAttributes

export const FormFieldRoot = ({
  fillWidth,
  children,
  ...props
}: FormFieldRootProps) => {
  return (
    <S.Wrapper $fillWidth={fillWidth} {...props}>
      {children}
    </S.Wrapper>
  )
}

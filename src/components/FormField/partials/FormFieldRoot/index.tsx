import React from 'react'
import { ReactNode } from 'react'

import { HTMLStyleAttributes } from '@/types'

import * as S from './styles'

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

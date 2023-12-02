import * as S from './styles'
import React from 'react'

export type FormFieldLabelProps = {
  children?: string
}

export const FormFieldLabel = ({ children }: FormFieldLabelProps) => {
  if (!children) return <></>

  return <S.Wrapper>{children}</S.Wrapper>
}

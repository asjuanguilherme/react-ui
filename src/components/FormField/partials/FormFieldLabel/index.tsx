import React from 'react'

import * as S from './styles'

export type FormFieldLabelProps = {
  children?: string
}

export const FormFieldLabel = ({ children }: FormFieldLabelProps) => {
  if (!children) return <></>

  return <S.Wrapper>{children}</S.Wrapper>
}

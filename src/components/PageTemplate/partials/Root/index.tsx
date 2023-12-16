import React, { ReactNode } from 'react'

import { HTMLStyleAttributes } from '~/types'

import * as S from './styles'

export type PageTemplateRootProps = {
  children: ReactNode
} & HTMLStyleAttributes

export const PageTemplateRoot = ({ children }: PageTemplateRootProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

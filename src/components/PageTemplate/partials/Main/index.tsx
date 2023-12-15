import React, { ReactNode } from 'react'

import { HTMLStyleAttributes } from '@/types'

import * as S from './styles'

export type PageTemplateMainProps = {
  children: ReactNode
} & HTMLStyleAttributes

export const PageTemplateMain = ({ children }: PageTemplateMainProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

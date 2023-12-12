import React, { ReactNode } from 'react'

import * as S from './styles'

export type HtmlContentProps =
  | { children: ReactNode; html?: never }
  | { children?: never; html: string }

export const HtmlContent = ({ html, children }: HtmlContentProps) => {
  if (html)
    return <S.Wrapper dangerouslySetInnerHTML={{ __html: html || '' }} />

  return <S.Wrapper>{children}</S.Wrapper>
}

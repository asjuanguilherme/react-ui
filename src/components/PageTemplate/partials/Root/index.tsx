import React, { ReactNode, forwardRef } from 'react'

import { HTMLStyleAttributes } from '~/types'

import * as S from './styles'

export type PageTemplateRootProps = {
  children?: ReactNode
} & HTMLStyleAttributes

export const PageTemplateRoot = forwardRef(
  ({ children, ...props }: PageTemplateRootProps, ref) => {
    return (
      <S.Wrapper
        // @ts-ignore
        ref={ref}
        {...props}
      >
        {children}
      </S.Wrapper>
    )
  },
)

export default PageTemplateRoot

import React, { ReactNode, forwardRef } from 'react'

import { HTMLStyleAttributes } from '~/types'

import * as S from './styles'

export type PageTemplateMainProps = {
  children?: ReactNode
} & HTMLStyleAttributes

export const PageTemplateMain = forwardRef(
  ({ children, ...props }: PageTemplateMainProps, ref) => {
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

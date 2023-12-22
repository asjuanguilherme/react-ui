import React, { forwardRef } from 'react'

import { HTMLStyleAttributes } from '~/types'

import { Breadcrumbs, BreadcrumbsProps, Container, Heading } from '~/components'

import * as S from './styles'

export type PageTemplateHeaderProps = {
  title?: string
  breadcrumbs?: BreadcrumbsProps['items']
} & HTMLStyleAttributes

export const PageTemplateHeader = forwardRef(
  ({ title, breadcrumbs, ...props }: PageTemplateHeaderProps, ref) => {
    return (
      <S.Wrapper
        // @ts-ignore
        ref={ref}
        {...props}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Container>
            <Breadcrumbs items={breadcrumbs} />
          </Container>
        )}
        <Container>
          <Heading level={1}>{title}</Heading>
        </Container>
      </S.Wrapper>
    )
  },
)

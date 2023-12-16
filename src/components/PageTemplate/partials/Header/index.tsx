import React from 'react'

import { HTMLStyleAttributes } from '~/types'

import { Breadcrumbs, BreadcrumbsProps, Container, Heading } from '~/components'

import * as S from './styles'

export type PageTemplateHeaderProps = {
  title?: string
  breadcrumbs?: BreadcrumbsProps['items']
} & HTMLStyleAttributes

export const PageTemplateHeader = ({
  title,
  breadcrumbs,
}: PageTemplateHeaderProps) => {
  return (
    <S.Wrapper>
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
}

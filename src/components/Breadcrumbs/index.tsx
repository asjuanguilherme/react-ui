import React, { Fragment } from 'react'

import _uniqueId from 'lodash/uniqueId'
import { HTMLStyleAttributes } from 'types'

import * as S from './styles'

export type BreadcrumbPathProps = {
  title: string
  href?: string
}

export type BreadcrumbsProps = {
  items: BreadcrumbPathProps[]
} & HTMLStyleAttributes

export const Breadcrumbs = ({ items, ...props }: BreadcrumbsProps) => {
  return (
    <S.Wrapper {...props}>
      <S.List>
        {items?.map(item => (
          <Fragment key={_uniqueId('breadcrumb-id-')}>
            <S.ListItem>
              <S.ItemContent as={item.href ? 'a' : 'span'} href={item.href}>
                {item.title}
              </S.ItemContent>
            </S.ListItem>
            <S.BreadcrumbChevron />
          </Fragment>
        ))}
      </S.List>
    </S.Wrapper>
  )
}

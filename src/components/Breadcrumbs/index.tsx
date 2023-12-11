import React from 'react'
import { useMemo } from 'react'

import { useTheme } from 'styled-components'
import { useScreenSize } from '@asjuanguilherme/js-utils'

import { breakpoints } from 'lib'

import { useGlobalTheme } from 'contexts'

import { Container } from 'components'
import { ChevronLeftIcon, ChevronRightIcon } from 'icons'

import * as S from './styles'

export type BreadcrumbPathProps = {
  title: string
  path?: string
}

export type BreadcrumbsProps = {
  paths: BreadcrumbPathProps[]
}

export const Breadcrumbs = ({ paths }: BreadcrumbsProps) => {
  const theme = useTheme()
  const screen = useScreenSize()
  const isTabletSUp = screen.width > breakpoints.tabletS

  const previousPathItem = useMemo(() => {
    return paths[paths.length - 2] || null
  }, [paths])

  return (
    <S.Wrapper>
      <Container>
        <S.List>
          {paths.map((item, index) => {
            const isLastItem = index === paths.length - 1
            const key = item.path || `${index}-${item.title}`

            return (
              <S.Item key={key}>
                {isLastItem && item.path ? (
                  <S.PathLink href={item.path}>{item.title}</S.PathLink>
                ) : (
                  <>
                    <S.Path>{item.title}</S.Path>
                    <ChevronRightIcon size={theme.fontSizes.small} />
                  </>
                )}
              </S.Item>
            )
          })}

          {!isTabletSUp && previousPathItem && (
            <S.Item>
              <S.PathLink href={previousPathItem.path || '/'}>
                <ChevronLeftIcon size={theme.fontSizes.small} />
                Voltar para: {previousPathItem.title}
              </S.PathLink>
            </S.Item>
          )}
        </S.List>
      </Container>
    </S.Wrapper>
  )
}

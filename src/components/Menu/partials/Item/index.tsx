import NextLinK from 'next/link'
import React, { useMemo } from 'react'
import { MouseEventHandler, MutableRefObject } from 'react'

import { HTMLStyleAttributes } from '@/types'

import { ThemeLayerIndex } from '@/lib/theming'

import { IconComponent } from '@/icons'

import * as S from './styles'

type MenuItemCommonProps = {
  title?: string
  liTag?: boolean
  layer?: ThemeLayerIndex
  onClick?: MouseEventHandler
  active?: boolean
  icon?: IconComponent
  setRef?: never
  size?: 'small' | 'medium'
} & HTMLStyleAttributes

type MenuItemLinkVariant = MenuItemCommonProps & {
  href: string
  isExternal?: boolean
  setRef?: MutableRefObject<HTMLAnchorElement | null>
}

type MenuItemButtonVariant = MenuItemCommonProps & {
  setRef?: MutableRefObject<HTMLButtonElement | null>
  href?: never
  isExternal?: never
}

export type MenuItemProps = MenuItemLinkVariant | MenuItemButtonVariant

export const MenuItem = ({
  active = false,
  layer = 1,
  icon: Icon,
  title,
  isExternal,
  liTag = true,
  setRef,
  size = 'medium',
  ...props
}: MenuItemProps) => {
  const LinkComponent = useMemo(() => {
    if (NextLinK) return NextLinK

    return 'a'
  }, [])

  return (
    <S.Wrapper as={liTag ? 'li' : 'span'}>
      <S.Button
        $active={active}
        $layer={layer}
        $size={size}
        ref={setRef}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        as={props.href ? LinkComponent : 'button'}
        {...props}
      >
        {Icon && <Icon />}
        {title}
      </S.Button>
    </S.Wrapper>
  )
}

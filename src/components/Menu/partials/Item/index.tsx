import React from 'react'
import { MouseEventHandler, MutableRefObject } from 'react'

import { HTMLStyleAttributes } from 'types'

import { ThemeLayerIndex } from 'lib/theming'

import { IconComponent } from 'icons'

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
  anchorComponent?: React.FC
}

type MenuItemButtonVariant = MenuItemCommonProps & {
  setRef?: MutableRefObject<HTMLButtonElement | null>
  href?: never
  isExternal?: never
  anchorComponent?: never
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
  anchorComponent,
  size = 'medium',
  ...props
}: MenuItemProps) => {
  return (
    <S.Wrapper as={liTag ? 'li' : 'span'}>
      <S.Button
        $active={active}
        $layer={layer}
        $size={size}
        as={props.href ? (anchorComponent ? anchorComponent : 'a') : 'button'}
        ref={setRef}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {Icon && <Icon />}
        {title}
      </S.Button>
    </S.Wrapper>
  )
}

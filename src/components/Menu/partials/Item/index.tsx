import { IconComponent } from 'icons'
import { MouseEventHandler, MutableRefObject } from 'react'
import * as S from './styles'
import { ThemeLayerIndex } from 'lib/theming'
import { HTMLStyleAttributes } from 'types'

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
        as={props.href ? (anchorComponent ? anchorComponent : 'a') : 'button'}
        $active={active}
        $layer={layer}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        ref={setRef}
        $size={size}
        {...props}
      >
        {Icon && <Icon />}
        {title}
      </S.Button>
    </S.Wrapper>
  )
}

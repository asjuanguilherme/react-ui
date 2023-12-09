import React from 'react'
import { HTMLAttributes, MouseEventHandler, useMemo } from 'react'

import * as S from './styles'

import { IconComponent } from 'icons'
import { ThemeLayerIndex } from 'lib/theming'

export type IconShowcaseItemProps = {
  title: string
  icon: IconComponent
  searchTermHightlight?: string | RegExp | null
  active?: boolean
  onClick?: MouseEventHandler
  layer?: ThemeLayerIndex
} & HTMLAttributes<HTMLDivElement>

export const IconShowcaseItem = ({
  searchTermHightlight,
  active,
  onClick,
  title,
  icon: Icon,
  ...props
}: IconShowcaseItemProps) => {
  const iconTitle = useMemo(() => {
    if (!searchTermHightlight) return title

    const regex = new RegExp(searchTermHightlight, 'i')
    return title.replace(regex, match => `<b>${match}</b>`)
  }, [title, searchTermHightlight])

  return (
    <S.Wrapper $active={active} onClick={onClick} {...props}>
      <S.Slug dangerouslySetInnerHTML={{ __html: iconTitle }} />
      <Icon />
    </S.Wrapper>
  )
}

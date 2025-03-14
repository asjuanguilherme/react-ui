import React, { MutableRefObject, ReactNode } from 'react'

import { WebTarget } from 'styled-components'

import { HTMLStyleAttributes } from '~/types'

import { ThemePaletteColors } from '~/lib/theming'

import { IconComponent } from '~/icons'

import * as S from './styles'

type Color = keyof ThemePaletteColors

export type AnchorColor = 'inherit' | Color

export type AnchorHoverColor = Color | 'string'

export type AnchorProps = {
  href: string
  icon?: IconComponent
  title?: ReactNode
  as?: WebTarget
  color?: AnchorColor
  hoverColor?: AnchorHoverColor
  setRef?: MutableRefObject<HTMLAnchorElement | null>
} & HTMLStyleAttributes

export const Anchor = ({
  icon: Icon,
  title,
  color = 'inherit',
  hoverColor = 'primary',
  setRef,
  ...props
}: AnchorProps) => {
  return (
    <S.Wrapper $color={color} $hoverColor={hoverColor} {...props} ref={setRef}>
      {Icon && <Icon />}
      {title}
    </S.Wrapper>
  )
}

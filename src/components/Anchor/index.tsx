import * as S from './styles'

import { MutableRefObject, ReactNode } from 'react'

import { HTMLStyleAttributes } from 'types'
import { IconComponent } from 'icons'
import { colors } from 'styles/tokens'

type Color = keyof typeof colors

export type AnchorColor = 'inherit' | Color

export type AnchorHoverColor = Color | 'string'

export type AnchorProps = {
  href: string
  icon?: IconComponent
  title?: ReactNode
  as?: any
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

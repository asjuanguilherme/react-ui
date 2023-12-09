import React, { MouseEventHandler } from 'react'

import { SupportedHTMLElements } from 'styled-components'

import { HTMLStyleAttributes } from 'types'

import { IconComponent } from 'icons'

import * as S from './styles'

export type ResponsiveButtonProps = {
  height?: number
  width?: number
  icon?: IconComponent
  title: string
  onClick?: MouseEventHandler
  borderDashed?: boolean
  as?: SupportedHTMLElements | unknown
} & HTMLStyleAttributes

export const ResponsiveButton = ({
  height = 100,
  width = 100,
  icon: Icon,
  title,
  borderDashed = false,
  ...props
}: ResponsiveButtonProps) => {
  return (
    <S.Wrapper {...props} $height={height} $width={width}>
      <S.Box $borderDashed={borderDashed}>
        {Icon && (
          <S.IconCircle>
            <Icon />
          </S.IconCircle>
        )}
        {title}
      </S.Box>
    </S.Wrapper>
  )
}

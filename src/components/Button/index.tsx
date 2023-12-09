import React from 'react'
import { ReactNode } from 'react'

import { FieldHeightToken } from 'lib'

import { Spinner } from 'components'
import { ButtonBaseProps } from 'components/ButtonBase'
import { IconComponent } from 'icons'

import * as S from './styles'

export type ButtonProps = ButtonBaseProps & {
  children?: never
  label?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  fillWidth?: boolean
  icon?: IconComponent
  size?: FieldHeightToken
}

export const Button = ({
  size = 'medium',
  suffix,
  prefix,
  fillWidth,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper $fillWidth={fillWidth} $size={size} {...props}>
      {prefix}
      {props.icon && <props.icon />}
      {props.label}
      {props.loading && <Spinner size="extra-small" />}
      {suffix}
    </S.Wrapper>
  )
}

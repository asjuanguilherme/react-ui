import React, { ReactNode } from 'react'
import * as S from './styles'
import { IconComponent } from '~/icons'
import { HTMLStyleAttributes } from '~/types'

export type BadgeType = 'error' | 'success' | 'warning' | 'info'

export type BadgeSize = 'small' | 'default'

export type BadgeProps = {
  size?: BadgeSize
  type?: BadgeType
  showIcon?: boolean
  icon?: IconComponent
  children?: ReactNode
} & HTMLStyleAttributes

export const Badge = ({
  type = 'info',
  size = 'default',
  children,
  ...props
}: BadgeProps) => {
  return (
    <S.Wrapper $size={size} $type={type} {...props}>
      {children}
    </S.Wrapper>
  )
}

export default Badge

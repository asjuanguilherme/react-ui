import * as S from './styles'
import React from 'react'
import { MouseEvent, MutableRefObject, ReactNode } from 'react'
import { colors } from 'styles/tokens'
import { HTMLStyleAttributes, LayerIndex } from 'types'

export type ButtonVariant = 'filled' | 'outlined' | 'layerBased'

export type ButtonBaseCommonProps = {
  [key: string]: any
} & {
  children?: ReactNode
  setRef?: MutableRefObject<HTMLButtonElement | HTMLAnchorElement | null>
  type?: 'button' | 'submit'
  disabled?: boolean
  loading?: boolean
  form?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  isExternal?: boolean
  href?: string
  linkComponent?: any
  shape?: 'pill' | 'rounded'
} & HTMLStyleAttributes

export type ButtonBaseLayerBasedVariant = ButtonBaseCommonProps & {
  variant: 'layerBased'
  color?: never
  layer?: LayerIndex
  borderLess?: boolean
  transparent?: boolean
  active?: boolean
}

export type ButtonBaseEitherVariantsProps = ButtonBaseCommonProps & {
  variant?: ButtonVariant
  color?: keyof typeof colors
  layer?: never
  borderLess?: never
  transparent?: never
  active?: never
}

export type ButtonBaseProps =
  | ButtonBaseEitherVariantsProps
  | ButtonBaseLayerBasedVariant

export const ButtonBase = ({
  children,
  linkComponent,
  loading,
  isExternal,
  layer = 1,
  type = 'button',
  variant = 'filled',
  color = 'primary',
  shape = 'pill',
  setRef,
  borderLess = false,
  transparent = false,
  active,
  ...props
}: ButtonBaseProps) => {
  return (
    <S.Wrapper
      as={props.href ? linkComponent || 'a' : 'button'}
      ref={setRef}
      target={props.href && isExternal ? '_blank' : '_self'}
      rel={props.href && isExternal ? 'noopener noreferrer' : undefined}
      {...props}
      $layer={layer}
      $variant={variant}
      $color={color}
      $loading={loading}
      $shape={shape}
      $borderLess={borderLess}
      $transparent={transparent}
      $active={active}
    >
      {children}
    </S.Wrapper>
  )
}

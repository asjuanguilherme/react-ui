import NextLink from 'next/link'
import React from 'react'
import { MouseEvent, MutableRefObject, ReactNode } from 'react'

import { HTMLStyleAttributes } from '~/types'

import {
  ButtonConfigTokenShape,
  ThemeLayerIndex,
  ThemePaletteColors,
} from '~/lib/theming'

import * as S from './styles'

export type ButtonVariant = 'filled' | 'outlined' | 'layerBased'

export type ButtonColors = string | keyof ThemePaletteColors

export type ButtonBaseCommonProps = {
  [key: string]: unknown
} & {
  children?: ReactNode
  setRef?: MutableRefObject<HTMLElement | null>
  type?: 'button' | 'submit'
  disabled?: boolean
  form?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  isExternal?: boolean
  href?: string
  shape?: ButtonConfigTokenShape
  loading?: boolean
  color?: ButtonColors
} & HTMLStyleAttributes

export type ButtonBaseLayerBasedVariant = ButtonBaseCommonProps & {
  variant: 'layerBased'
  layer?: ThemeLayerIndex
  borderLess?: boolean
  transparent?: boolean
  active?: boolean
}

export type ButtonBaseEitherVariantsProps = ButtonBaseCommonProps & {
  variant?: ButtonVariant
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
  isExternal,
  layer = 1,
  type = 'button',
  variant = 'filled',
  color = 'primary',
  shape,
  setRef,
  borderLess = false,
  transparent = false,
  active = false,
  ...props
}: ButtonBaseProps) => {
  return (
    <S.Wrapper
      as={props.href ? (NextLink as unknown as 'a') || 'a' : 'button'}
      // @ts-expect-error
      ref={setRef}
      rel={props.href && isExternal ? 'noopener noreferrer' : undefined}
      target={props.href && isExternal ? '_blank' : '_self'}
      type={type}
      {...props}
      $active={active}
      $borderLess={borderLess}
      $color={color}
      $layer={layer}
      $shape={shape}
      $transparent={transparent}
      $variant={variant}
    >
      {children}
    </S.Wrapper>
  )
}

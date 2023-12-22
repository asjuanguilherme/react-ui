import React, { ChangeEventHandler, MouseEventHandler } from 'react'

import { HTMLStyleAttributes } from '~/types'

import { ThemeLayerIndex } from '~/lib/theming'

import * as S from './styles'

export type SwitchProps = {
  onClick?: MouseEventHandler
  onChange?: ChangeEventHandler<HTMLInputElement>
  checked?: boolean
  label?: string
  labelPosition?: 'start' | 'end'
  layer?: ThemeLayerIndex
} & HTMLStyleAttributes

export const Switch = ({
  label,
  labelPosition = 'end',
  checked,
  onClick,
  onChange,
  className,
  style,
  layer = 1,
  ...props
}: SwitchProps) => {
  return (
    <S.Wrapper
      $layer={layer}
      className={className}
      style={style}
      onClick={onClick}
    >
      {labelPosition === 'start' && label}
      <input
        checked={checked}
        hidden
        onChange={onChange}
        type="checkbox"
        {...props}
      />
      <S.SwitchTrack>
        <S.SwitchDot />
      </S.SwitchTrack>
      {labelPosition === 'end' && label}
    </S.Wrapper>
  )
}

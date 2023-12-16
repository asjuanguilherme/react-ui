import React, { ChangeEventHandler } from 'react'

import { HTMLStyleAttributes } from '~/types'

import { ThemeLayerIndex } from '~/lib/theming'

import * as S from './styles'

export type SwitchProps = {
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
  onChange,
  className,
  style,
  layer = 1,
}: SwitchProps) => {
  return (
    <S.Wrapper $layer={layer} className={className} style={style}>
      {labelPosition === 'start' && label}
      <input checked={checked} hidden onChange={onChange} type="checkbox" />
      <S.SwitchTrack>
        <S.SwitchDot />
      </S.SwitchTrack>
      {labelPosition === 'end' && label}
    </S.Wrapper>
  )
}

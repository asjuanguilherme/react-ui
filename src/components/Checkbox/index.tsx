import React, { ChangeEventHandler } from 'react'
import { ReactNode } from 'react'

import { HTMLStyleAttributes } from 'types'

import { ThemeLayerIndex } from 'lib/theming'

import * as S from './styles'

export type CheckboxProps = {
  name?: string
  value?: string
  onChange?: ChangeEventHandler
  checked?: boolean
  layer?: ThemeLayerIndex
  text?: ReactNode
  alignment?: 'top' | 'center' | 'bottom'
} & HTMLStyleAttributes

export const Checkbox = ({
  value,
  onChange,
  checked,
  name,
  className,
  style,
  layer = 0,
  text,
  alignment,
  ...props
}: CheckboxProps) => {
  return (
    <S.Wrapper
      $alignment={alignment}
      $layer={layer}
      className={className}
      style={style}
    >
      <input
        checked={checked}
        hidden
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
        {...props}
      />

      <S.Box $layer={layer}>
        <S.Mark $layer={layer} />
      </S.Box>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

import React, { ChangeEventHandler } from 'react'
import { ReactNode } from 'react'

import * as S from './styles'

import { ThemeLayerIndex } from 'lib/theming'
import { HTMLStyleAttributes } from 'types'

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
      style={style}
      className={className}
      $layer={layer}
      $alignment={alignment}
    >
      <input
        type="checkbox"
        hidden
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        {...props}
      />

      <S.Box $layer={layer}>
        <S.Mark $layer={layer} />
      </S.Box>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

import { HTMLStyleAttributes, LayerIndex } from 'types'
import * as S from './styles'
import React, { ReactNode } from 'react'
import { CheckIcon } from 'components/icons'

export type CheckboxProps = {
  name?: string
  value?: string
  onChange?: (e: any) => void
  checked?: boolean
  layer?: LayerIndex
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

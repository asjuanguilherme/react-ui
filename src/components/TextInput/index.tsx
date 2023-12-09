import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
  useEffect,
  useState,
} from 'react'

import * as S from './styles'

import { ButtonProps, FormField, FormTextField } from 'components'
import {
  HandleFormFieldStatusParams,
  handleFormFieldStatus,
} from 'components/FormField/utils/handleFormFieldStatus'
import { ThemeLayerIndex } from 'lib/theming'
import { HTMLStyleAttributes } from 'types'

export type TextInputProps = {
  label?: string
  suffix?: ReactNode
  prefix?: ReactNode
  fillWidth?: boolean
  layer?: ThemeLayerIndex
  type?: 'text' | 'email' | 'password' | 'tel'
  placeholder?: string
  button?: ButtonProps
  value?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  setRef?: MutableRefObject<HTMLInputElement | null>
  onFocused?: (isFocused: boolean) => void
  onClick?: MouseEventHandler
} & HTMLStyleAttributes &
  HandleFormFieldStatusParams

export const TextInput = ({
  className,
  style,
  label,
  prefix,
  suffix,
  fillWidth,
  layer = 1,
  button,
  setRef,
  onFocused,
  info,
  error,
  success,
  ...props
}: TextInputProps) => {
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    onFocused && onFocused(focused)
  }, [onFocused, focused])

  const fieldStatus = handleFormFieldStatus({ error, info, success })

  return (
    <FormField.Root fillWidth={fillWidth} className={className} style={style}>
      <FormField.Label>{label}</FormField.Label>
      <FormTextField.Wrapper
        $layer={layer}
        $focused={focused}
        $hasError={Boolean(error)}
        $disabled={props.disabled}
        $hasSuccess={Boolean(success)}
      >
        {prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input
          $hasPrefix={Boolean(prefix)}
          ref={setRef}
          onFocus={e => {
            setFocused(true)
            props.onFocus && props.onFocus(e)
          }}
          onBlur={e => {
            setFocused(false)
            props.onBlur && props.onBlur(e)
          }}
          disabled={props.disabled}
          {...props}
        />
        {suffix && <S.Suffix>{suffix}</S.Suffix>}
        {button && <S.Button {...button} />}
      </FormTextField.Wrapper>
      <FormField.Status {...fieldStatus} />
    </FormField.Root>
  )
}

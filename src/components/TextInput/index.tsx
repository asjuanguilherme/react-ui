import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
  useEffect,
  useState,
} from 'react'

import { HTMLStyleAttributes } from 'types'

import { ThemeLayerIndex } from 'lib/theming'

import { ButtonProps, FormField, FormTextField, Spinner } from 'components'
import {
  HandleFormFieldStatusParams,
  handleFormFieldStatus,
} from 'components/FormField/utils/handleFormFieldStatus'

import * as S from './styles'

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
  loading?: boolean
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
  onFocus,
  onBlur,
  loading,
  ...props
}: TextInputProps) => {
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    onFocused && onFocused(focused)
  }, [onFocused, focused])

  const fieldStatus = handleFormFieldStatus({ error, info, success })

  return (
    <FormField.Root className={className} fillWidth={fillWidth} style={style}>
      <FormField.Label>{label}</FormField.Label>
      <FormTextField.Wrapper
        $disabled={props.disabled}
        $focused={focused}
        $hasError={Boolean(error)}
        $hasSuccess={Boolean(success)}
        $layer={layer}
      >
        {prefix && <S.Prefix>{prefix}</S.Prefix>}
        <S.Input
          $hasPrefix={Boolean(prefix)}
          disabled={props.disabled}
          onBlur={e => {
            setFocused(false)
            onBlur && onBlur(e)
          }}
          onFocus={e => {
            setFocused(true)
            onFocus && onFocus(e)
          }}
          ref={setRef}
          {...props}
        />
        {(suffix || loading) && (
          <S.Suffix>
            <Spinner size="extra-small" />
            {suffix}
          </S.Suffix>
        )}
        {button && <S.Button {...button} />}
      </FormTextField.Wrapper>
      <FormField.Status {...fieldStatus} />
    </FormField.Root>
  )
}

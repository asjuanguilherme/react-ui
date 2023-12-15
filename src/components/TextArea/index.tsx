import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useState,
} from 'react'

import { HTMLStyleAttributes } from '@/types'

import { ThemeLayerIndex } from '@/lib/theming'

import {
  FormField,
  FormTextField,
  HandleFormFieldStatusParams,
  handleFormFieldStatus,
} from '@/components'

export type TextAreaProps = {
  label?: string
  fillWidth?: boolean
  layer?: ThemeLayerIndex
  name?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  onFocus?: FocusEventHandler<HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
  setRef?: MutableRefObject<HTMLTextAreaElement | null>
  onFocused?: (isFocused: boolean) => void
  onClick?: MouseEventHandler
  showCharsCount?: boolean
  max?: number
} & HTMLStyleAttributes &
  HandleFormFieldStatusParams

export const TextArea = ({
  label,
  fillWidth,
  layer = 1,
  setRef,
  info,
  error,
  success,
  showCharsCount,
  value,
  max,
  onFocused,
  onBlur,
  onFocus,
  onChange,
  ...props
}: TextAreaProps) => {
  const [focused, setFocused] = useState(false)
  const [internalValue, setInternalValue] = useState('')

  useEffect(() => {
    onFocused && onFocused(focused)
  }, [onFocused, focused])

  const fieldStatus = handleFormFieldStatus({ error, info, success })
  const handledValue = value || internalValue

  return (
    <FormField.Root
      className={props.className}
      fillWidth={fillWidth}
      style={props.style}
    >
      <FormField.Label>{label}</FormField.Label>
      <FormTextField.Wrapper
        $disabled={props.disabled}
        $focused={focused}
        $hasCharsCounter={showCharsCount}
        $hasError={Boolean(error)}
        $hasSuccess={Boolean(success)}
        $layer={layer}
      >
        <FormTextField.TextArea
          as="textarea"
          onBlur={e => {
            setFocused(false)
            onBlur && onBlur(e)
          }}
          onChange={e => {
            setInternalValue(e.target.value)

            onChange && onChange(e)
          }}
          onFocus={e => {
            setFocused(true)
            onFocus && onFocus(e)
          }}
          ref={setRef}
          rows={5}
          {...props}
        />
        <FormField.CharsLimit charsCount={handledValue.length} limit={max} />
      </FormTextField.Wrapper>
      <FormField.Status {...fieldStatus} />
    </FormField.Root>
  )
}

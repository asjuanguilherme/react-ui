import {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useState,
} from 'react'
import { HTMLStyleAttributes, LayerIndex } from 'types'
import {
  HandleFormFieldStatusParams,
  handleFormFieldStatus,
  FormTextField,
  FormField,
} from 'components'

export type TextAreaProps = {
  label?: string
  fillWidth?: boolean
  layer?: LayerIndex
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
      fillWidth={fillWidth}
      className={props.className}
      style={props.style}
    >
      <FormField.Label>{label}</FormField.Label>
      <FormTextField.Wrapper
        $layer={layer}
        $focused={focused}
        $hasError={Boolean(error)}
        $disabled={props.disabled}
        $hasSuccess={Boolean(success)}
        $hasCharsCounter={showCharsCount}
      >
        <FormTextField.TextArea
          as="textarea"
          ref={setRef}
          onFocus={e => {
            setFocused(true)
            onFocus && onFocus(e)
          }}
          onBlur={e => {
            setFocused(false)
            onBlur && onBlur(e)
          }}
          rows={5}
          onChange={e => {
            setInternalValue(e.target.value)

            onChange && onChange(e)
          }}
          {...props}
        />
        <FormField.CharsLimit charsCount={handledValue.length} limit={max} />
      </FormTextField.Wrapper>
      <FormField.Status {...fieldStatus} />
    </FormField.Root>
  )
}

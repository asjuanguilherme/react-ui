import { FormFieldStatusType } from '../partials'

export type HandleFormFieldStatusParams = {
  error?: string
  success?: string
  info?: string
}

export type HandleFormFieldStatusResult = {
  type: FormFieldStatusType
  text: string
}

export const handleFormFieldStatus = ({
  error,
  success,
  info,
}: HandleFormFieldStatusParams) => {
  let type: FormFieldStatusType | undefined
  let text: string | undefined

  if (success) {
    type = 'success'
    text = success
  }

  if (info) {
    type = 'info'
    text = info
  }

  if (error) {
    type = 'error'
    text = error
  }

  return {
    type,
    text,
  }
}

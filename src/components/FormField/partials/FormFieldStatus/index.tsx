import React from 'react'

import * as S from './styles'

import {
  CheckIcon,
  CircleExclamationIcon,
  IconComponent,
  InfoCircleIcon,
} from 'icons'

export type FormFieldStatusType = 'info' | 'error' | 'success'

export type FormFieldStatusProps = {
  type?: FormFieldStatusType
  text?: string
}

const iconsByType: Record<FormFieldStatusType, IconComponent> = {
  info: InfoCircleIcon,
  error: CircleExclamationIcon,
  success: CheckIcon,
}

export const FormFieldStatus = ({
  type = 'info',
  text,
}: FormFieldStatusProps) => {
  if (!text) return <></>

  const Icon = iconsByType[type]

  return (
    <S.Wrapper $type={type}>
      <Icon />
      {text}
    </S.Wrapper>
  )
}

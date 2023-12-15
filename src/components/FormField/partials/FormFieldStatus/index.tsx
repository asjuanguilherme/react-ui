import React from 'react'

import {
  CheckIcon,
  CircleExclamationIcon,
  IconComponent,
  InfoCircleIcon,
} from '@/icons'

import * as S from './styles'

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
  const Icon = iconsByType[type]

  return (
    <S.Wrapper $type={type}>
      {text && <Icon />}
      {text}
    </S.Wrapper>
  )
}

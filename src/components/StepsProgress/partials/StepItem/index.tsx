import React from 'react'

import { IconComponent } from 'icons'

import * as S from './styles'

export type StepsProgressStemItemListPosition = 'start' | 'middle' | 'end'

export type StepsProgressStepItemProps = {
  title: string
  icon?: IconComponent
  active?: boolean
  description?: string
  customActiveColor?: string
  listPosition?: StepsProgressStemItemListPosition
  width?: number
  isCurrentStep?: boolean
  stepsFullyCompleted?: boolean
}

export const StepsProgressStepItem = ({
  icon: Icon,
  title,
  description,
  listPosition = 'middle',
  width,
  active = false,
  isCurrentStep = false,
  stepsFullyCompleted = false,
}: StepsProgressStepItemProps) => {
  return (
    <S.Wrapper
      $active={active}
      $isCurrentStep={isCurrentStep}
      $listPosition={listPosition}
      $width={width}
      $stepsFullyCompleted={stepsFullyCompleted}
    >
      <S.Badge $active={active} $stepsFullyCompleted={stepsFullyCompleted}>
        {Icon && <Icon />} {!Icon && <S.BadgeCircle />}
      </S.Badge>
      <S.Title>{title}</S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.Wrapper>
  )
}

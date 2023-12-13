import React from 'react'

import { ThemeLayerIndex } from 'lib'

import { IconComponent } from 'icons'

import * as S from './styles'

export type StepsProgressStemItemListPosition = 'start' | 'middle' | 'end'

export type StepsProgressStepItemProps = {
  title: string
  icon?: IconComponent
  description?: string
  customActiveColor?: string
  width?: number
  layer?: ThemeLayerIndex
  active?: boolean
  listPosition?: StepsProgressStemItemListPosition
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
  layer = 1,
}: StepsProgressStepItemProps) => {
  return (
    <S.Wrapper
      $active={active}
      $isCurrentStep={isCurrentStep}
      $listPosition={listPosition}
      $stepsFullyCompleted={stepsFullyCompleted}
      $width={width}
    >
      <S.Badge $active={active} $stepsFullyCompleted={stepsFullyCompleted}>
        {Icon && <Icon />} {!Icon && <S.BadgeCircle />}
      </S.Badge>
      {(description || title) && (
        <S.Card $isCurrentStep={isCurrentStep} layer={layer}>
          {title && <S.Title role="heading">{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </S.Card>
      )}
    </S.Wrapper>
  )
}

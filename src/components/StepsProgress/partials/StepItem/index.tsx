import React from 'react'

import { ThemeLayerIndex } from '~/lib'

import { IconComponent } from '~/icons'

import { StepsProgressDirection } from '../Root'

import * as S from './styles'
import { regexPatterns } from '@asjuanguilherme/js-utils'

export type StepsProgressStemItemListPosition = 'start' | 'middle' | 'end'

export type StepsProgressStepItemProps = {
  title: string
  icon?: IconComponent
  description?: string
  customActiveColor?: string
  width?: number | string
  layer?: ThemeLayerIndex
  active?: boolean
  listPosition?: StepsProgressStemItemListPosition
  isCurrentStep?: boolean
  stepsFullyCompleted?: boolean
  direction?: StepsProgressDirection
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
  direction = 'row',
}: StepsProgressStepItemProps) => {
  if (
    width &&
    isNaN(Number(width)) &&
    !regexPatterns.percentNumber.test(width.toString())
  )
    throw new Error(
      'Width property expects a number or percent number. Example of valid values: 100, 100%, 543.23',
    )

  return (
    <S.Wrapper
      $active={active}
      $isCurrentStep={isCurrentStep}
      $listPosition={listPosition}
      $stepsFullyCompleted={stepsFullyCompleted}
      $width={width}
      $direction={direction}
    >
      <S.Badge $active={active} $stepsFullyCompleted={stepsFullyCompleted}>
        {Icon && <Icon />} {!Icon && <S.BadgeCircle />}
      </S.Badge>
      {(description || title) && (
        <S.Card $isCurrentStep={isCurrentStep} layer={layer}>
          {title && (
            <S.Title $direction={direction} role="heading">
              {title}
            </S.Title>
          )}
          {description && <S.Description>{description}</S.Description>}
        </S.Card>
      )}
    </S.Wrapper>
  )
}

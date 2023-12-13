import React, { ReactNode, useCallback, useMemo } from 'react'

import { StepsProgressStemItemListPosition } from '../StepItem'

import * as S from './styles'

export type StepsProgressDirection = 'column' | 'row'

type GetStepItemProps = (index: number) => {
  active?: boolean
  listPosition?: StepsProgressStemItemListPosition
  isCurrentStep?: boolean
  stepsFullyCompleted?: boolean
  direction: StepsProgressDirection
}

type StepListProps = {
  direction: StepsProgressDirection
}

export type StepsProgressRootCallbackProps = {
  getStepItemPosition: (
    index: number,
    length: number,
  ) => StepsProgressStemItemListPosition
  isStepItemActive: (index: number, length: number) => boolean
  getStepItemProps: GetStepItemProps
  isComplete: boolean
  stepListProps: StepListProps
}

export type StepsProgressRootProps = {
  children: (props: StepsProgressRootCallbackProps) => ReactNode
  currentIndex: number
  length: number
  direction: StepsProgressDirection
}

export const StepsProgressRoot = ({
  children,
  currentIndex,
  length,
  direction = 'column',
}: StepsProgressRootProps) => {
  const getStepItemPosition = useCallback(
    (index: number, length: number): StepsProgressStemItemListPosition => {
      return index === length - 1 ? 'end' : index === 0 ? 'start' : 'middle'
    },
    [length],
  )

  const isStepItemActive = useCallback(
    (index: number) => {
      return index <= currentIndex
    },
    [currentIndex],
  )

  const isStepItemCurrentIndex = useCallback(
    (index: number) => {
      return index === currentIndex
    },
    [currentIndex],
  )

  const getStepItemProps: GetStepItemProps = index => ({
    active: isStepItemActive(index),
    isCurrentStep: isStepItemCurrentIndex(index),
    listPosition: getStepItemPosition(index, length),
    stepsFullyCompleted: currentIndex >= length - 1,
    direction,
  })

  const stepListProps: StepListProps = { direction }

  const isComplete = useMemo(() => currentIndex >= length - 1, [])

  return (
    <S.Wrapper>
      {children({
        getStepItemPosition,
        isStepItemActive,
        getStepItemProps,
        isComplete,
        stepListProps,
      })}
    </S.Wrapper>
  )
}

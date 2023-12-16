import React, { useState } from 'react'

import { ThemeLayerIndex } from '~/lib/theming'

import { RatingStar } from './RatingStar'
import * as S from './styles'

const rateNumbers = [1, 2, 3, 4, 5]

export type RatingStarsProps = {
  value?: number | null
  setValue?: (number: number) => void
  readOnly?: boolean
  layer?: ThemeLayerIndex
}

export const RatingStars = ({
  value,
  setValue,
  readOnly = false,
  layer,
}: RatingStarsProps) => {
  const [rateValue, setRateValue] = useState<number>(0)
  const [hoverValue, setHoverValue] = useState<null | number>(null)

  return (
    <S.Wrapper>
      {rateNumbers.map(rateNumber => (
        <RatingStar
          filled={
            hoverValue
              ? hoverValue >= rateNumber
              : (value || rateValue) >= rateNumber
          }
          key={rateNumber}
          layer={layer}
          onClick={() => {
            setValue && setValue(rateNumber)
            setRateValue(rateNumber)
          }}
          onMouseLeave={() => {
            !readOnly && setHoverValue(null)
          }}
          onMouseOver={() => {
            !readOnly && setHoverValue(rateNumber)
          }}
          readOnly={readOnly}
        />
      ))}
    </S.Wrapper>
  )
}

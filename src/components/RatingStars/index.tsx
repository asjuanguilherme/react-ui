import * as S from './styles'
import { useState } from 'react'
import { RatingStar } from './RatingStar'
import { ThemeLayerIndex } from 'lib/theming'

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
          layer={layer}
          readOnly={readOnly}
          key={rateNumber}
          onClick={() => {
            setValue && setValue(rateNumber)
            setRateValue(rateNumber)
          }}
          onMouseOver={() => {
            !readOnly && setHoverValue(rateNumber)
          }}
          onMouseLeave={() => {
            !readOnly && setHoverValue(null)
          }}
          filled={
            hoverValue
              ? hoverValue >= rateNumber
              : (value || rateValue) >= rateNumber
          }
        />
      ))}
    </S.Wrapper>
  )
}

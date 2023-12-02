import * as S from './styles'
import { HTMLStyleAttributes } from 'types'
import React from 'react'

export type FormFieldCharsLimitProps = {
  charsCount: number
  limit?: number
} & HTMLStyleAttributes

export const FormFieldCharsLimit = ({
  charsCount,
  limit,
  ...props
}: FormFieldCharsLimitProps) => {
  return (
    <S.Wrapper {...props}>
      <S.Count $limitExceeded={limit ? charsCount > limit : false}>
        {charsCount}
      </S.Count>
      <S.Limit>{limit && ` / ${limit}`}</S.Limit>
    </S.Wrapper>
  )
}

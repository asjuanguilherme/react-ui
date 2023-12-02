import * as S from './styles'
import React, { MutableRefObject } from 'react'
import { getInitialsFromName } from '@asjuanguilherme/js-utils'
import { HTMLStyleAttributes } from 'types'

export type AvatarProps = {
  size: number
  name: string
  image?: string
  setRef?: MutableRefObject<HTMLSpanElement>
} & HTMLStyleAttributes

export const Avatar = ({
  size = 60,
  name,
  image,
  setRef,
  ...props
}: AvatarProps) => {
  return (
    <S.Wrapper $size={size} $name={name} ref={setRef} {...props}>
      {image ? <S.Image src={image} alt={name} /> : getInitialsFromName(name)}
    </S.Wrapper>
  )
}

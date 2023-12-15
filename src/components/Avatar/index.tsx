import React from 'react'
import { MutableRefObject } from 'react'

import { getInitialsFromName } from '@asjuanguilherme/js-utils'

import { HTMLStyleAttributes } from '@/types'

import * as S from './styles'

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
    <S.Wrapper $name={name} $size={size} ref={setRef} {...props}>
      {image ? <S.Image alt={name} src={image} /> : getInitialsFromName(name)}
    </S.Wrapper>
  )
}

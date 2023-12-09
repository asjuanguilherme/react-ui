import React from 'react'

import { ButtonConfigToken } from 'lib'

import { Spinner } from 'components'
import { ButtonBaseProps } from 'components/ButtonBase'
import { IconComponent } from 'icons'

import * as S from './styles'

export type BackgroundImagePositionY = 'top' | 'center' | 'bottom'
export type BackgroundImagePositionX = 'left' | 'center' | 'right'
export type BackgroundImageFit = 'cover' | 'fill' | 'contain'

export type IconButtonImagePropertyProps = {
  src: string
  positionY?: BackgroundImagePositionY
  positionX?: BackgroundImagePositionX
  fit?: BackgroundImageFit
}

type IconButtonCommonProps = ButtonBaseProps & {
  image?: IconButtonImagePropertyProps
  size?: keyof ButtonConfigToken['height']
}

type IconButtonWithIconProps = IconButtonCommonProps & {
  icon: IconComponent | (() => JSX.Element)
  image?: never
}

type IconButtonWithImageProps = IconButtonCommonProps & {
  image: IconButtonImagePropertyProps
  icon?: never
}

export type IconButtonProps = IconButtonWithIconProps | IconButtonWithImageProps

export const IconButton = ({
  icon: Icon,
  size = 'medium',
  image,
  ...props
}: IconButtonProps) => {
  return (
    <S.Wrapper
      $imageFit={image?.fit}
      $imagePositionX={image?.positionX}
      $imagePositionY={image?.positionY}
      $imageSrc={image?.src}
      $size={size}
      {...props}
    >
      {props.loading ? <Spinner size="extra-small" /> : Icon ? <Icon /> : ''}
    </S.Wrapper>
  )
}

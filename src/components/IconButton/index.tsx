import * as S from './styles'

import { ButtonBaseProps } from 'components/ButtonBase'
import { Spinner } from 'components'
import { IconComponent } from 'icons'
import { FieldSizesToken } from 'lib/theming'

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
  size?: keyof FieldSizesToken
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
      $size={size}
      $imageSrc={image?.src}
      $imageFit={image?.fit}
      $imagePositionX={image?.positionX}
      $imagePositionY={image?.positionY}
      {...props}
    >
      {props.loading ? <Spinner size="extra-small" /> : Icon ? <Icon /> : ''}
    </S.Wrapper>
  )
}

import { fieldSizes, font } from 'styles/tokens'
import { ButtonBase } from 'components/ButtonBase'
import styled, { css } from 'styled-components'
import {
  BackgroundImageFit,
  BackgroundImagePositionX,
  BackgroundImagePositionY,
} from '.'

export const Wrapper = styled(ButtonBase)<{
  $size: keyof typeof fieldSizes
  $imageSrc?: string
  $imagePositionX?: BackgroundImagePositionX
  $imagePositionY?: BackgroundImagePositionY
  $imageFit?: BackgroundImageFit
}>`
  ${({ $imageSrc, $imagePositionY, $imagePositionX, $imageFit }) =>
    $imageSrc &&
    css`
      background-image: url(${$imageSrc});
      background-position: ${$imagePositionX || 'center'}
        ${$imagePositionY || 'center'};
      background-size: ${$imageFit || 'contain'};
    `}

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          height: ${fieldSizes.small};
          width: ${fieldSizes.small};
          font-size: ${font.sizes.small};
        `
      case 'medium':
        return css`
          height: ${fieldSizes.medium};
          width: ${fieldSizes.medium};
          font-size: ${font.sizes.medium};
        `
      case 'large':
        return css`
          height: ${fieldSizes.large};
          width: ${fieldSizes.large};
          font-size: ${font.sizes.large};
        `
    }
  }}
`

import { ButtonBase } from 'components/ButtonBase'
import { FieldSizesToken } from 'lib/theming'
import styled, { css } from 'styled-components'

import {
  BackgroundImageFit,
  BackgroundImagePositionX,
  BackgroundImagePositionY,
} from '.'

export const Wrapper = styled(ButtonBase)<{
  $size: keyof FieldSizesToken
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
          height: ${props => props.theme.fieldSizes.small};
          width: ${props => props.theme.fieldSizes.small};
          font-size: ${props => props.theme.fontSizes.small};
        `
      case 'medium':
        return css`
          height: ${props => props.theme.fieldSizes.medium};
          width: ${props => props.theme.fieldSizes.medium};
          font-size: ${props => props.theme.fontSizes.medium};
        `
      case 'large':
        return css`
          height: ${props => props.theme.fieldSizes.large};
          width: ${props => props.theme.fieldSizes.large};
          font-size: ${props => props.theme.fontSizes.large};
        `
    }
  }}
`

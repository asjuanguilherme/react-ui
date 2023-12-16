import { styled, css } from 'styled-components'

import { ButtonConfigToken } from '~/lib'

import { ButtonBase } from '~/components/ButtonBase'

import {
  BackgroundImageFit,
  BackgroundImagePositionX,
  BackgroundImagePositionY,
} from '.'

export const Wrapper = styled(ButtonBase)<{
  $size: keyof ButtonConfigToken['height']
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

  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return css`
          height: ${theme.button.height.small};
          width: ${theme.button.height.small};
          font-size: ${theme.fontSizes.medium};
        `
      case 'medium':
        return css`
          height: ${theme.button.height.medium};
          width: ${theme.button.height.medium};
          font-size: ${theme.fontSizes.medium};
        `
      case 'large':
        return css`
          height: ${theme.button.height.large};
          width: ${theme.button.height.large};
          font-size: ${theme.fontSizes.large};
        `
    }
  }}
`

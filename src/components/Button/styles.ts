import styled, { css } from 'styled-components'
import { fieldSizes, font, spacing } from 'styles/tokens'
import { ButtonBase } from '../ButtonBase'

const horizontalPadding = (size: string) => css`
  padding-left: ${size};
  padding-right: ${size};
`

export const Wrapper = styled(ButtonBase)<{
  $size: keyof typeof fieldSizes
  $fillWidth?: boolean
}>`
  svg {
    flex-shrink: 0;
  }

  ${({ $fillWidth }) =>
    $fillWidth &&
    css`
      width: 100%;
    `}

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          ${horizontalPadding(spacing.components.large)}
          height: ${fieldSizes.small};
          font-size: ${font.sizes.smaller};
          gap: ${spacing.components.small};
        `
      case 'medium':
        return css`
          ${horizontalPadding(spacing.components.large)}
          height: ${fieldSizes.medium};
          gap: ${spacing.components.small};
          font-size: ${font.sizes.medium};
        `
      case 'large':
        return css`
          ${horizontalPadding(spacing.components.large)}
          height: ${fieldSizes.large};
          gap: ${spacing.components.medium};
          font-size: ${font.sizes.large};
        `
    }
  }}
`

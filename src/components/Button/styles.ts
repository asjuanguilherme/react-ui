import styled, { css } from 'styled-components'

import { ButtonHeightToken } from 'lib'

import { ButtonBase } from 'components/ButtonBase'

const horizontalPadding = (size: string) => css`
  padding-left: ${size};
  padding-right: ${size};
`

export const Wrapper = styled(ButtonBase)<{
  $size: ButtonHeightToken
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

  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return css`
          ${horizontalPadding(theme.spacing.components.large)}
          height: ${theme.button.height.small};
          font-size: ${theme.fontSizes.small};
          gap: ${theme.spacing.components.small};
        `
      case 'medium':
        return css`
          ${horizontalPadding(theme.spacing.components.large)}
          height: ${theme.button.height.medium};
          gap: ${theme.spacing.components.small};
          font-size: ${theme.fontSizes.small};
        `
      case 'large':
        return css`
          ${horizontalPadding(theme.spacing.components.large)}
          height: ${theme.button.height.large};
          gap: ${theme.spacing.components.medium};
          font-size: ${theme.fontSizes.medium};
        `
    }
  }}
`

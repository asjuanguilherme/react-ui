import styled, { css } from 'styled-components'
import { ButtonBase } from '../ButtonBase'
import { FieldSizesToken } from 'lib/theming'

const horizontalPadding = (size: string) => css`
  padding-left: ${size};
  padding-right: ${size};
`

export const Wrapper = styled(ButtonBase)<{
  $size: keyof FieldSizesToken
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
          height: ${theme.fieldSizes.small};
          font-size: ${theme.fontSizes.xsmall};
          gap: ${theme.spacing.components.small};
        `
      case 'medium':
        return css`
          ${horizontalPadding(theme.spacing.components.large)}
          height: ${theme.fieldSizes.medium};
          gap: ${theme.spacing.components.small};
          font-size: ${theme.fontSizes.medium};
        `
      case 'large':
        return css`
          ${horizontalPadding(theme.spacing.components.large)}
          height: ${theme.fieldSizes.large};
          gap: ${theme.spacing.components.medium};
          font-size: ${theme.fontSizes.large};
        `
    }
  }}
`

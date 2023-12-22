import { styled, css } from 'styled-components'

import { MenuItemVariant, ThemeLayerIndex } from '~/lib/theming'

export const Button = styled.button<{
  $active: boolean
  $layer: ThemeLayerIndex
  $size: 'small' | 'medium'
  $fillWidth?: boolean
  $variant: MenuItemVariant
}>`
  cursor: pointer;
  display: inline-flex;
  gap: ${props => props.theme.spacing.components.small};
  align-items: center;
  color: ${props => props.theme.colors.content.text};
  background: transparent;
  transition-duration: ${props => props.theme.transitionDurations.default};
  transition-property: background;
  text-decoration: none;

  ${({ $fillWidth }) =>
    $fillWidth &&
    css`
      width: 100%;
    `}

  ${({ $variant, $active, theme, $layer }) => {
    switch ($variant) {
      default:
      case 'button':
        return css`
          border-radius: ${props => props.theme.borderRadius.medium};
          ${$active
            ? css`
                color: white;
                background-color: ${theme.colors.palette.primary.normal};
              `
            : css`
                &:hover {
                  background-color: ${theme.colors.layers[$layer]
                    .hoveredBackground};
                }
              `}
        `
      case 'basic':
        return css``
    }
  }}

  ${({ $size, $variant, theme }) => {
    switch ($size) {
      case 'small':
        return css`
          font-size: ${theme.fontSizes.small};
          ${$variant === 'button' &&
          css`
            padding: ${theme.spacing.components.small}
              ${theme.spacing.components.small};
          `}
        `
      case 'medium':
        return css`
          font-size: ${theme.fontSizes.small};
          ${$variant === 'button' &&
          css`
            padding: ${theme.spacing.components.small}
              ${theme.spacing.components.medium};
          `}
        `
    }
  }}

  svg {
    flex-shrink: 0;
  }
`

export const Wrapper = styled.li``

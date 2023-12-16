import { styled, css } from 'styled-components'

import { ThemeLayerIndex } from '~/lib/theming'

export const Button = styled.button<{
  $active: boolean
  $layer: ThemeLayerIndex
  $size: 'small' | 'medium'
}>`
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
  display: inline-flex;
  gap: ${props => props.theme.spacing.components.small};
  align-items: center;
  color: ${props => props.theme.colors.content.text};
  background: transparent;
  transition-duration: ${props => props.theme.transitionDurations.default};
  transition-property: background;
  text-decoration: none;

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          font-size: ${props => props.theme.fontSizes.small};
          padding: ${props => props.theme.spacing.components.small}
            ${props => props.theme.spacing.components.small};
        `
      case 'medium':
        return css`
          font-size: ${props => props.theme.fontSizes.small};
          padding: ${props => props.theme.spacing.components.small}
            ${props => props.theme.spacing.components.medium};
        `
    }
  }}

  ${({ $active, $layer, theme }) =>
    $active
      ? css`
          color: white;
          background-color: ${theme.colors.palette.primary.normal};
        `
      : css`
          &:hover {
            background-color: ${theme.colors.layers[$layer].hoveredBackground};
          }
        `}

        svg {
    flex-shrink: 0;
  }
`

export const Wrapper = styled.li``

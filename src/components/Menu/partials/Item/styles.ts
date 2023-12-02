import { borderRadius, font, spacing, transition } from 'styles/tokens'
import styled, { css } from 'styled-components'
import { LayerIndex } from 'types'

export const Button = styled.button<{
  $active: boolean
  $layer: LayerIndex
  $size: 'small' | 'medium'
}>`
  width: 100%;
  border-radius: ${borderRadius.medium};
  cursor: pointer;
  display: inline-flex;
  gap: ${spacing.components.small};
  align-items: center;
  color: ${props => props.theme.colors.content.text};
  background: transparent;
  transition-duration: ${transition.default};
  transition-property: background;
  text-decoration: none;

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          font-size: ${font.sizes.smaller};
          padding: ${spacing.components.small} ${spacing.components.small};
        `
      case 'medium':
        return css`
          font-size: ${font.sizes.small};
          padding: ${spacing.components.small} ${spacing.components.medium};
        `
    }
  }}

  ${({ $active, $layer, theme }) =>
    $active
      ? css`
          color: white;
          background-color: ${theme.colors.main.primary.normal};
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

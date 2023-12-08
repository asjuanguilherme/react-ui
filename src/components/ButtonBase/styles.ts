import styled, { css } from 'styled-components'

import { ButtonVariant } from '.'
import { readableColor, grayscale } from 'polished'
import { ThemeLayerIndex, ThemePalleteColors } from 'lib/theming'
import { fontFamily } from 'fonts'

export const Wrapper = styled.button<{
  $variant: ButtonVariant
  $color: keyof ThemePalleteColors
  $layer: ThemeLayerIndex
  $loading: boolean
  $shape: 'pill' | 'rounded'
  $transparent: boolean
  $borderLess: boolean
  $active: boolean
}>`
  display: inline-flex;
  flex-shrink: 0;
  line-height: 1em;
  align-items: center;
  justify-content: center;
  font-weight: ${fontFamily.poppins.weights.medium};
  gap: ${props => props.theme.spacing.components.small};
  transition-duration: ${props => props.theme.transition.fast};
  transition-property: background;
  text-transform: capitalize;
  text-decoration: none;

  &:not(:disabled) {
    &:hover {
      cursor: pointer;
    }
  }

  ${({ $shape }) => {
    switch ($shape) {
      case 'pill':
        return css`
          border-radius: ${props => props.theme.borderRadius.pill};
        `
      case 'rounded':
        return css`
          border-radius: ${props => props.theme.borderRadius.medium};
        `
    }
  }}

  ${({ $loading }) =>
    $loading &&
    css`
      pointer-events: none;
    `}

  ${({ $variant, theme, $color, $layer, $active }) => {
    switch ($variant) {
      case 'filled':
        return css`
          background: ${theme.colors.pallete[$color].normal};
          color: ${() => {
            if ($color === 'primary') return 'white'

            return readableColor(
              theme.colors.pallete[$color].normal,
              '#000000',
              '#ffffff',
            )
          }};

          &:disabled {
            opacity: 0.8;
            background: ${grayscale(theme.colors.pallete[$color].light)};
          }

          &:not(:disabled) {
            &:hover {
              background: ${theme.colors.pallete[$color].light};
            }

            &:active {
              background: ${theme.colors.pallete[$color].dark};
            }
          }
        `
      case 'layerBased':
        return css`
          color: ${theme.colors.content.text};
          background-color: ${theme.colors.layers[$layer].background};
          border: 1px solid ${theme.colors.layers[$layer].border};

          &:disabled {
            background-color: ${theme.colors.layers[$layer].border};
          }

          &:not(:disabled) {
            &:hover {
              color: ${theme.colors.pallete[$color].normal};
              border-color: ${theme.colors.pallete[$color].light}40;
            }
          }

          transition-duration: ${props => props.theme.transition.default};
          transition-property: color, background, border;

          ${$active &&
          css`
            color: ${theme.colors.pallete[$color].normal};
            border-color: ${theme.colors.pallete[$color].light}40;
            background-color: ${theme.colors.layers[$layer].hoveredBackground};
          `}
        `
      case 'outlined':
        return css`
          background: transparent;
          color: ${theme.colors.pallete[$color].normal};
          border: 1px solid currentColor;

          &:hover {
            background-color: ${theme.colors.pallete[$color].normal};
            color: ${readableColor(
              theme.colors.pallete[$color].normal,
              'black',
              'white',
            )};
          }
        `
    }
  }}
  
    ${({ $transparent }) =>
    $transparent &&
    css`
      background: transparent;
    `};

  ${({ $borderLess }) =>
    $borderLess &&
    css`
      border: unset;
    `}
`

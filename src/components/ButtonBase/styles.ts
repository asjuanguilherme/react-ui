import styled, { css } from 'styled-components'
import { colors, spacing, transition, borderRadius } from 'styles/tokens'
import { ButtonVariant } from '.'
import { readableColor, grayscale } from 'polished'
import { LayerIndex } from 'types'
import { fontFamily, themes } from 'styles'

export const Wrapper = styled.button<{
  $variant: ButtonVariant
  $color: keyof typeof colors
  $layer: LayerIndex
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
  font-weight: ${fontFamily.montserrat.weight.medium};
  gap: ${spacing.components.small};
  transition-duration: ${transition.fast};
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
          border-radius: ${borderRadius.pill};
        `
      case 'rounded':
        return css`
          border-radius: ${borderRadius.medium};
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
          background: ${theme.colors.main[$color].normal};
          color: ${() => {
            if ($color === 'primary') return 'white'

            return readableColor(
              theme.colors.main[$color].normal,
              '#000000',
              '#ffffff',
            )
          }};

          &:disabled {
            opacity: 0.8;
            background: ${grayscale(theme.colors.main[$color].light)};
          }

          &:not(:disabled) {
            &:hover {
              background: ${theme.colors.main[$color].light};
            }

            &:active {
              background: ${theme.colors.main[$color].dark};
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
              color: ${theme.colors.main[$color].normal};
              border-color: ${theme.colors.main[$color].light}40;
            }
          }

          transition-duration: ${transition.default};
          transition-property: color, background, border;

          ${$active &&
          css`
            color: ${theme.colors.main[$color].normal};
            border-color: ${theme.colors.main[$color].light}40;
            background-color: ${theme.colors.layers[$layer].hoveredBackground};
          `}
        `
      case 'outlined':
        return css`
          background: transparent;
          color: ${theme.colors.main[$color].normal};
          border: 1px solid currentColor;

          &:hover {
            background-color: ${theme.colors.main[$color].normal};
            color: ${readableColor(
              $color,
              themes.light.colors.content.title,
              themes.dark.colors.content.title,
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

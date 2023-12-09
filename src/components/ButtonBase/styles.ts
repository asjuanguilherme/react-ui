import { regexPatterns } from '@asjuanguilherme/js-utils'
import { fontFamily } from 'fonts'
import { grayscale, readableColor } from 'polished'

import { ThemeLayerIndex, generateThemeColorPaletteItem } from 'lib/theming'

import styled, { css } from 'styled-components'

import { ButtonColors, ButtonVariant } from '.'

export const Wrapper = styled.button<{
  $variant: ButtonVariant
  $color: ButtonColors
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
  transition-duration: ${props => props.theme.transitionDurations.fast};
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
    const palleteColor = (() => {
      const colorObj = theme.colors.palette[$color]
      const isHexColor = regexPatterns.colorHexadecimal.test($color + '')

      if (!colorObj) {
        if (!isHexColor)
          throw new Error(`${$color} is not a palette color or hex color.`)

        return generateThemeColorPaletteItem({
          baseColor: $color + '',
        })
      } else {
        return colorObj
      }
    })()

    switch ($variant) {
      case 'filled':
        return css`
          background: ${palleteColor.normal};
          color: ${() => {
            if ($color === 'primary') return 'white'

            return readableColor(palleteColor.normal, '#000000', '#ffffff')
          }};

          &:disabled {
            opacity: 0.8;
            background: ${grayscale(palleteColor.light)};
          }

          &:not(:disabled) {
            &:hover {
              background: ${palleteColor.light};
            }

            &:active {
              background: ${palleteColor.dark};
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
              color: ${palleteColor.normal};
              border-color: ${palleteColor.light}40;
            }
          }

          transition-duration: ${props =>
            props.theme.transitionDurations.default};
          transition-property: color, background, border;

          ${$active &&
          css`
            color: ${palleteColor.normal};
            border-color: ${palleteColor.light}40;
            background-color: ${theme.colors.layers[$layer].hoveredBackground};
          `}
        `
      case 'outlined':
        return css`
          background: transparent;
          color: ${palleteColor.normal};
          border: 1px solid currentColor;

          &:hover {
            background-color: ${palleteColor.normal};
            color: ${readableColor(palleteColor.normal, 'black', 'white')};
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

import { grayscale, readableColor } from 'polished'
import { styled, css } from 'styled-components'

import { regexPatterns } from '@asjuanguilherme/js-utils'

import { poppinsFontFamily } from '~/lib/font'

import {
  ButtonConfigTokenShape,
  ThemeLayerIndex,
  generateThemeColorPaletteItem,
} from '~/lib/theming'

import { ButtonColors, ButtonVariant } from '.'

export const Wrapper = styled.button<{
  $variant: ButtonVariant
  $color: ButtonColors
  $layer: ThemeLayerIndex
  $transparent: boolean
  $borderLess: boolean
  $active: boolean
  $shape?: ButtonConfigTokenShape
}>`
  display: inline-flex;
  flex-shrink: 0;
  line-height: 1em;
  align-items: center;
  justify-content: center;
  font-weight: ${poppinsFontFamily.weights.medium};
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

  ${({ $shape, theme }) => {
    const defaultShape = theme.button.shape
    const shape = $shape || defaultShape

    switch (shape) {
      case 'pill':
        return css`
          border-radius: ${theme.borderRadius.pill};
        `
      case 'rounded':
        return css`
          border-radius: ${theme.button.borderRadius};
        `
    }
  }}

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

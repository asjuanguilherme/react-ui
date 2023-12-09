import { ThemeLayerIndex } from 'lib/theming'
import styled, { css } from 'styled-components'

export const Svg = styled.svg<{ $filled: boolean; $layer: ThemeLayerIndex }>`
  ${({ $filled, $layer, theme }) =>
    $filled
      ? css`
          fill: ${theme.colors.palette.primary.normal};
        `
      : css`
          fill: ${theme.colors.layers[$layer].background};
          stroke: ${theme.colors.layers[$layer].border};
          stroke-width: 1px;
        `}
`

export const Wrapper = styled.div<{ $readOnly?: boolean }>`
  ${props =>
    !props.$readOnly &&
    css`
      cursor: pointer;
    `}

  padding: ${props => props.theme.spacing.components.xsmall};
`

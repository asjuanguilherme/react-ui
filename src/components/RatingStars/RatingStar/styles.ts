import styled, { css } from 'styled-components'
import { spacing } from 'styles/tokens'
import { LayerIndex } from 'types'

export const Svg = styled.svg<{ $filled: boolean; $layer: LayerIndex }>`
  ${({ $filled, $layer, theme }) =>
    $filled
      ? css`
          fill: ${theme.colors.main.primary.normal};
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

  padding: ${spacing.components.smaller};
`

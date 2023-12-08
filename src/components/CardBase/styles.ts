import styled, { css } from 'styled-components'
import { ThemeLayerIndex } from 'lib/theming'

import { CardBaseProps } from '.'

export const Wrapper = styled.div<{
  $layer: ThemeLayerIndex
  $hoverable: boolean
  $roundedCorners?: CardBaseProps['roundedCorners']
}>`
  background-color: ${props =>
    props.theme.colors.layers[props.$layer].background};
  border: 1px solid ${props => props.theme.colors.layers[props.$layer].border};
  border-radius: ${props => props.theme.borderRadius.medium};

  ${({ $hoverable, theme, $layer }) =>
    $hoverable &&
    css`
      transition: ${theme.transition.default} background;
      &:hover {
        background-color: ${theme.colors.layers[$layer].hoveredBackground};
      }
    `}

  border-radius: ${({ $roundedCorners, theme }) => {
    switch ($roundedCorners) {
      case 'none':
        return 'initial'
      default:
        if ($roundedCorners) return theme.borderRadius[$roundedCorners]
        else return theme.borderRadius.medium
    }
  }}
`

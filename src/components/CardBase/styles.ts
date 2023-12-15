import { styled, css } from 'styled-components'

import { ThemeLayerIndex } from '@/lib/theming'

import { CardBaseProps } from '.'
import { opacify } from 'polished'

export const Wrapper = styled.div<{
  $layer: ThemeLayerIndex
  $hoverable: boolean
  $roundedCorners?: CardBaseProps['roundedCorners']
  $boxShadow?: boolean
}>`
  background-color: ${props =>
    props.theme.colors.layers[props.$layer].background};
  border: 1px solid ${props => props.theme.colors.layers[props.$layer].border};
  border-radius: ${props => props.theme.borderRadius.medium};

  ${({ $hoverable, theme, $layer }) =>
    $hoverable &&
    css`
      transition: ${theme.transitionDurations.default} background;
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

  ${({ $boxShadow, theme }) =>
    $boxShadow &&
    css`
      box-shadow: -1px -17px 33px 0px ${opacify(-0.98, theme.colors.content.title)};
      box-shadow: -1px 6px 16px 0px
        ${opacify(-0.95, theme.colors.content.title)};
    `}
`

import styled, { css } from 'styled-components'
import { LayerIndex } from 'types'
import { borderRadius, transition } from 'styles/tokens'
import { CardBaseProps } from '.'

export const Wrapper = styled.div<{
  $layer: LayerIndex
  $hoverable: boolean
  $roundedCorners?: CardBaseProps['roundedCorners']
}>`
  background-color: ${props =>
    props.theme.colors.layers[props.$layer].background};
  border: 1px solid ${props => props.theme.colors.layers[props.$layer].border};
  border-radius: ${borderRadius.medium};

  ${props =>
    props.$hoverable &&
    css`
      transition: ${transition.default} background;
      &:hover {
        background-color: ${props.theme.colors.layers[props.$layer]
          .hoveredBackground};
      }
    `}

  border-radius: ${({ $roundedCorners }) => {
    switch ($roundedCorners) {
      case 'none':
        return 'initial'
      default:
        if ($roundedCorners) return borderRadius[$roundedCorners]
        else return borderRadius.medium
    }
  }}
`

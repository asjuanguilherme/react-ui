import styled from 'styled-components'
import { spacing } from 'styles/tokens'
import { LayerIndex } from 'types'

export const Wrapper = styled.span<{ $layer: LayerIndex }>`
  display: inline-flex;
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.layers[props.$layer].border};
  margin: ${spacing.components.small} 0;
`

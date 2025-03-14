import { styled } from 'styled-components'

import { ThemeLayerIndex } from '~/lib/theming'

export const Wrapper = styled.span<{ $layer: ThemeLayerIndex }>`
  display: inline-flex;
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.layers[props.$layer].border};
  margin: ${props => props.theme.spacing.components.small} 0;
`

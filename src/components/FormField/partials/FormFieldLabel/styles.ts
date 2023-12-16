import { styled } from 'styled-components'

import { poppinsFontFamily } from '~/lib/font'

export const Wrapper = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${poppinsFontFamily.weights.bold};
`

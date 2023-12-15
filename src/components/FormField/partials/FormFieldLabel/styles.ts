import { styled } from 'styled-components'

import { fontFamily } from '@/fonts'

export const Wrapper = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${fontFamily.poppins.weights.bold};
`

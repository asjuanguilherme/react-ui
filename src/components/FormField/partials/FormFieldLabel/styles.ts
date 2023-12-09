import { fontFamily } from 'fonts'
import styled from 'styled-components'

export const Wrapper = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${fontFamily.poppins.weights.bold};
`

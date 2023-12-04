import { font } from 'styles/tokens'
import styled from 'styled-components'
import { fontFamily } from 'fonts'

export const Wrapper = styled.span`
  display: block;
  font-size: ${font.sizes.small};
  font-weight: ${fontFamily.poppins.weights.bold};
`

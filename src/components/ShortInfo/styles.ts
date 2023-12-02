import { font, spacing } from 'styles/tokens'

import styled from 'styled-components'

export const Content = styled.span``

export const Title = styled.span`
  color: ${props => props.theme.colors.content.detail};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.components.smaller};
  font-size: ${font.sizes.smaller};
`

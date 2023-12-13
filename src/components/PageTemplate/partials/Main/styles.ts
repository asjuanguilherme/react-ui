import styled from 'styled-components'

import { screens } from 'lib'

export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.components.large} 0;

  ${screens.tablet} {
    padding: ${props => props.theme.spacing.sections.small} 0;
  }
`

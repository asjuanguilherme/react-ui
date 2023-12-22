import { styled } from 'styled-components'

import { screens } from '~/lib'

export const Wrapper = styled.main<{ $sidebarWidth?: number }>`
  padding: ${props => props.theme.spacing.components.large} 0;

  ${screens.tablet} {
    padding: ${props => props.theme.spacing.sections.small} 0;
  }
`

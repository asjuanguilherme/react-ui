import styled from 'styled-components'

import { screens } from 'lib/responsiveness'

export const Title = styled.h1`
  color: ${props => props.theme.colors.content.title};
  font-size: ${props => props.theme.fontSizes.xlarge};
  margin-bottom: ${props => props.theme.spacing.components.medium};

  ${screens.tablet} {
    margin-bottom: ${props => props.theme.spacing.sections.small};
    font-size: ${props => props.theme.fontSizes.xlarge};
  }
`

export const Wrapper = styled.header`
  padding: ${props => props.theme.spacing.components.medium} 0;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.components.medium};

  ${screens.tablet} {
    padding: ${props => props.theme.spacing.components.xlarge} 0;
  }
`

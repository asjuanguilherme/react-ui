import { screens } from 'lib'

import styled from 'styled-components'

export const PathLink = styled.a``

export const Path = styled.span``

export const Item = styled.li`
  a {
    color: ${props => props.theme.colors.content.text};
    text-decoration: none;
    svg {
      margin-right: ${props => props.theme.spacing.components.small};
    }

    &:hover {
      color: ${props => props.theme.colors.palette.primary.normal};
    }
  }

  span {
    color: ${props => props.theme.colors.content.detail};
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.components.medium};
  font-size: ${props => props.theme.fontSizes.small};
`

export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.components.large} 0;

  ${screens.tablet} {
    padding: ${props => props.theme.spacing.sections.small} 0;
  }
`

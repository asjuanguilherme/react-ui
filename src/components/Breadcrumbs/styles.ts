import styled from 'styled-components'

import { ChevronRightIcon } from 'icons'

export const ItemContent = styled.span`
  text-decoration: none;
`

export const ListItem = styled.li`
  width: max-content;
  flex-shrink: 0;

  a {
    color: ${props => props.theme.colors.content.text};

    &:hover {
      color: ${props => props.theme.colors.palette.primary.normal};
    }
  }
`

export const BreadcrumbChevron = styled(ChevronRightIcon)`
  color: ${props => props.theme.colors.content.detail};
`

export const List = styled.ol`
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.components.medium};
  flex-wrap: wrap;

  ${ListItem}:last-of-type {
    color: ${props => props.theme.colors.content.detail};
  }

  ${BreadcrumbChevron}:last-of-type {
    display: none;
  }
`

export const Wrapper = styled.nav`
  font-size: ${props => props.theme.fontSizes.small};
`

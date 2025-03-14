import { styled, css } from 'styled-components'

import { screens } from '~/lib/responsiveness'

import { CardBase } from '~/components/CardBase'

export const ContentWrapper = styled.div<{ $enableContentPadding: boolean }>`
  font-size: ${props => props.theme.fontSizes.small};
  box-sizing: content-box;
  transition-duration: ${props => props.theme.transitionDurations.default};
  transition-property: background;

  ${screens.tabletS} {
    font-size: ${props => props.theme.fontSizes.medium};
  }

  ${({ $enableContentPadding, theme }) =>
    $enableContentPadding &&
    css`
      padding-top: 0;
      padding: ${theme.spacing.components.medium};
    `}
`

export const Body = styled.div<{ $opened: boolean; $maxHeight: number }>`
  overflow: hidden;
  max-height: 0px;
  transition-duration: ${props => props.theme.transitionDurations.default};
  transition-property: max-height;
  transition-timing-function: ease;

  ${({ $opened, $maxHeight }) =>
    $opened &&
    css`
      max-height: ${$maxHeight}px;
      transition-duration: 0.2s;
      transition-timing-function: ease-out;
    `}
`

export const Title = styled.span`
  svg {
    margin-right: ${props => props.theme.spacing.components.small};
  }
`

export const Wrapper = styled(CardBase)`
  width: 100%;
  overflow: hidden;
`

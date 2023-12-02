import styled, { css } from 'styled-components'
import { font, screens, spacing, transition } from 'styles/tokens'
import { CardBase } from 'components/CardBase'

export const ContentWrapper = styled.div<{ $enableContentPadding: boolean }>`
  font-size: ${font.sizes.small};
  box-sizing: content-box;
  transition-duration: ${transition.default};
  transition-property: background;

  ${screens.tabletS_Up} {
    font-size: ${font.sizes.medium};
  }

  ${({ $enableContentPadding }) =>
    $enableContentPadding &&
    css`
      padding-top: 0;
      padding: ${spacing.components.medium};
    `}
`

export const Body = styled.div<{ $opened: boolean; $maxHeight: number }>`
  overflow: hidden;
  max-height: 0px;
  transition-duration: ${transition.default};
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
    margin-right: ${spacing.components.small};
  }
`

export const Wrapper = styled(CardBase)`
  width: 100%;
  overflow: hidden;
`

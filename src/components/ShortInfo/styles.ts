import styled, { css } from 'styled-components'

export const Content = styled.span<{ $highlightContent: boolean }>`
  ${({ $highlightContent }) =>
    $highlightContent &&
    css`
      font-size: ${props => props.theme.fontSizes.small};
      font-weight: ${props => props.theme.fontWeights.bold};
    `}
`

export const Title = styled.span`
  color: ${props => props.theme.colors.content.detail};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.components.xsmall};
  font-size: ${props => props.theme.fontSizes.small};
`

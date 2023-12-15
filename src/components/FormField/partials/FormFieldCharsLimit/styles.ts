import { styled, css } from 'styled-components'

export const Limit = styled.span``

export const Count = styled.span<{ $limitExceeded: boolean }>`
  ${({ $limitExceeded }) =>
    $limitExceeded &&
    css`
      color: ${props => props.theme.colors.palette.error.normal};
    `}
`

export const Wrapper = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  position: absolute;
  right: ${props => props.theme.spacing.components.small};
  bottom: ${props => props.theme.spacing.components.small};
`

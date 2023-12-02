import { font, spacing } from 'styles/tokens'
import styled, { css } from 'styled-components'

export const Limit = styled.span``

export const Count = styled.span<{ $limitExceeded: boolean }>`
  ${({ $limitExceeded }) =>
    $limitExceeded &&
    css`
      color: ${props => props.theme.colors.main.error.normal};
    `}
`

export const Wrapper = styled.span`
  font-size: ${font.sizes.smaller};
  position: absolute;
  right: ${spacing.components.small};
  bottom: ${spacing.components.small};
`

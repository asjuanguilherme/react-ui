import { spacing } from 'styles/tokens'
import styled, { css } from 'styled-components'

export const Wrapper = styled.ul<{
  $maxHeight: number
  $direction: 'row' | 'column'
  $noPadding: boolean
}>`
  list-style: none;
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${spacing.components.smaller};
  overflow-y: auto;
  max-height: ${({ $maxHeight }) => $maxHeight + 'px'};

  ${({ $noPadding }) =>
    !$noPadding &&
    css`
      padding: ${spacing.components.small};
    `}
`

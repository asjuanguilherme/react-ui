import { styled, css } from 'styled-components'

export const Wrapper = styled.ul<{
  $maxHeight: number
  $direction: 'row' | 'column'
  $noPadding: boolean
}>`
  list-style: none;
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${props => props.theme.spacing.components.xsmall};
  overflow-y: auto;
  max-height: ${({ $maxHeight }) => $maxHeight + 'px'};

  ${({ $noPadding }) =>
    !$noPadding &&
    css`
      padding: ${props => props.theme.spacing.components.small};
    `}
`

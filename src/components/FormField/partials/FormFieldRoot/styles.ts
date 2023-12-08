import styled, { css } from 'styled-components'

export const Wrapper = styled.label<{ $fillWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.components.small};
  position: relative;

  ${({ $fillWidth }) =>
    $fillWidth &&
    css`
      display: flex;
      width: 100%;
    `}
`

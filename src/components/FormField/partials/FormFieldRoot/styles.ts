import { spacing } from 'styles/tokens'
import styled, { css } from 'styled-components'

export const Wrapper = styled.label<{ $fillWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${spacing.components.small};
  position: relative;

  ${({ $fillWidth }) =>
    $fillWidth &&
    css`
      display: flex;
      width: 100%;
    `}
`

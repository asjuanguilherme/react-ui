import { styled, css } from 'styled-components'

export const Wrapper = styled.span<{ $fillWidth: boolean }>`
  position: relative;
  display: inline-block;

  ${({ $fillWidth }) => {
    if ($fillWidth)
      return css`
        width: max-content;
      `
    else
      return css`
        width: 100%;
      `
  }};
`

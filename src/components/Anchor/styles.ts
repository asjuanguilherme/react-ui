import { AnchorColor, AnchorHoverColor } from '.'
import { colors, spacing, transition } from 'styles/tokens'
import styled, { css } from 'styled-components'

export const Wrapper = styled.a<{
  $color: AnchorColor
  $hoverColor: AnchorHoverColor
}>`
  display: inline-flex;
  gap: ${spacing.components.smaller};
  align-items: center;
  color: inherit;
  transition: ${transition.default};
  font-size: inherit;
  text-decoration: none;

  svg {
    flex-shrink: 0;
  }

  ${({ $color }) => {
    if (Object.keys(colors).some(color => color === $color))
      return css`
        color: ${colors[$color as 'primary'].normal};
      `

    return css`
      color: ${$color};
    `
  }}

  &:hover {
    ${({ $hoverColor, $color }) => {
      if (Object.keys(colors).some(color => color === $hoverColor)) {
        if ($hoverColor === $color)
          return css`
            color: ${colors[$hoverColor as 'primary'].dark};
            color: red;
          `

        return css`
          color: ${colors[$hoverColor as 'primary'].normal};
        `
      }

      return css`
        color: ${$hoverColor};
      `
    }}
  }
`

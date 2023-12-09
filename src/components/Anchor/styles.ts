import styled, { css } from 'styled-components'

import { AnchorColor, AnchorHoverColor } from '.'

export const Wrapper = styled.a<{
  $color: AnchorColor
  $hoverColor: AnchorHoverColor
}>`
  display: inline-flex;
  gap: ${props => props.theme.spacing.components.xsmall};
  align-items: center;
  color: inherit;
  transition: ${props => props.theme.transitionDurations.default};
  font-size: inherit;
  text-decoration: none;

  svg {
    flex-shrink: 0;
  }

  ${({ $color, theme }) => {
    if (Object.keys(theme.colors.palette).some(color => color === $color))
      return css`
        color: ${theme.colors.palette[$color as 'primary'].normal};
      `

    return css`
      color: ${$color};
    `
  }}

  &:hover {
    ${({ $hoverColor, $color, theme }) => {
      if (
        Object.keys(theme.colors.palette).some(color => color === $hoverColor)
      ) {
        if ($hoverColor === $color)
          return css`
            color: ${theme.colors.palette[$hoverColor as 'primary'].dark};
            color: red;
          `

        return css`
          color: ${theme.colors.palette[$hoverColor as 'primary'].normal};
        `
      }

      return css`
        color: ${$hoverColor};
      `
    }}
  }
`

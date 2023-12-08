import { AnchorColor, AnchorHoverColor } from '.'

import styled, { css } from 'styled-components'

export const Wrapper = styled.a<{
  $color: AnchorColor
  $hoverColor: AnchorHoverColor
}>`
  display: inline-flex;
  gap: ${props => props.theme.spacing.components.xsmall};
  align-items: center;
  color: inherit;
  transition: ${props => props.theme.transition.default};
  font-size: inherit;
  text-decoration: none;

  svg {
    flex-shrink: 0;
  }

  ${({ $color, theme }) => {
    if (Object.keys(theme.colors.pallete).some(color => color === $color))
      return css`
        color: ${theme.colors.pallete[$color as 'primary'].normal};
      `

    return css`
      color: ${$color};
    `
  }}

  &:hover {
    ${({ $hoverColor, $color, theme }) => {
      if (
        Object.keys(theme.colors.pallete).some(color => color === $hoverColor)
      ) {
        if ($hoverColor === $color)
          return css`
            color: ${theme.colors.pallete[$hoverColor as 'primary'].dark};
            color: red;
          `

        return css`
          color: ${theme.colors.pallete[$hoverColor as 'primary'].normal};
        `
      }

      return css`
        color: ${$hoverColor};
      `
    }}
  }
`

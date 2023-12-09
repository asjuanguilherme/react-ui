import { opacify } from 'polished'

import { IconButton } from 'components/IconButton'
import styled, { css } from 'styled-components'

export const Wrapper = styled(IconButton)<{
  $zIndex: number
  $top?: number
  $right?: number
  $bottom?: number
  $left?: number
}>`
  position: fixed;

  ${({ $top, $bottom }) => {
    if ($top)
      return css`
        top: ${$top};
      `
    if ($bottom)
      return css`
        bottom: ${$bottom};
      `

    return css`
      bottom: ${props => props.theme.container.padding};
    `
  }}

  ${({ $left, $right }) => {
    if ($left)
      return css`
        left: ${$left};
      `
    if ($right)
      return css`
        right: ${$right};
      `

    return css`
      right: ${props => props.theme.container.padding};
    `
  }}

  ${({ theme, $zIndex }) => {
    const shadowColor = theme.colors.content.title

    return css`
      z-index: ${$zIndex || theme.zIndex.floatButtons};
      box-shadow:
        0 6px 16px 0 ${opacify(-0.92, shadowColor)},
        0 3px 6px -4px ${opacify(-0.88, shadowColor)},
        0 9px 28px 8px ${opacify(-0.95, shadowColor)};
    `
  }}
`

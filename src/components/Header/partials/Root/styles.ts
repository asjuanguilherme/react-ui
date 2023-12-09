import { opacify } from 'polished'

import { Container as DefaultContainer } from 'components'
import styled, { css } from 'styled-components'

export const Container = styled(DefaultContainer)``

export const Wrapper = styled.header<{
  $transparent: boolean
  $sticky: boolean
}>`
  width: 100%;

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: fixed;
      z-index: ${props => props.theme.zIndex.navbar};
      left: 0;
      top: 0;
    `}

  ${({ $transparent, theme }) =>
    $transparent
      ? css`
          background: transparent;
          color: white;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(rgba(0, 0, 0, 0.65), transparent);
            height: 125%;
            width: 100%;
            z-index: -1;
          }
        `
      : css`
          background: ${theme.colors.layers[1].background};
          color: ${theme.title};
          box-shadow: 0 0 1.5rem ${opacify(-0.9, theme.colors.content.title)};
        `}
`

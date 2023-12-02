import { breakpoints, layout, transition, zIndex } from 'styles/tokens'
import { CardBase } from 'components/CardBase'
import styled, { css } from 'styled-components'
import { LayerIndex } from 'types'

export const Box = styled(CardBase)<{ $visible: boolean; $layer: LayerIndex }>`
  @media screen and (max-width: ${breakpoints.tablet}px) {
    width: 100%;
    max-width: 100%;
    position: static;
    flex-shrink: 0;

    ${({ $visible }) =>
      $visible &&
      css`
        pointer-events: all;
      `}
  }

  overflow-y: hidden;
  position: absolute;
  z-index: 10;
  width: 100%;
  transition: ${transition.default};
  transition-property: background, border, transform, opacity;

  ${({ $visible }) =>
    !$visible &&
    css`
      transform: translateY(-2rem);
      opacity: 0;
      pointer-events: none;
    `}
`

export const Wrapper = styled.div<{ $visible: boolean }>`
  @media screen and (max-width: ${breakpoints.tablet}px) {
    background: rgba(0, 0, 0, 0.3);
    height: 100vh;
    max-height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: ${zIndex.modals};
    padding: ${layout.gutter};
    display: flex;
    align-items: flex-end;
    transition-duration: ${transition.default};
    transition-property: opacity;

    ${({ $visible }) =>
      !$visible &&
      css`
        pointer-events: none;
        opacity: 0;
      `}
  }
`

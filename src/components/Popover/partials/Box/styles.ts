import styled, { css } from 'styled-components'

import { breakpoints, screens } from 'lib/responsiveness'

import { CardBase } from 'components/CardBase'

import { PopoverBoxHorizontalAlignment, PopoverBoxVerticalAlignment } from '.'

export const Box = styled(CardBase)<{
  $visible: boolean
  $horizontalAlignment: PopoverBoxHorizontalAlignment
  $verticalAlignment: PopoverBoxVerticalAlignment
  $maxHeight?: number
  $maxWidth?: number
}>`
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

  transition: ${props => props.theme.transitionDurations.default};
  transition-property: background, border, transform, opacity, top;

  ${screens.tablet} {
    top: 100%;
    width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth + 'px' : 'max-content')};

    ${({ $maxHeight }) =>
      $maxHeight &&
      css`
        max-height: ${$maxHeight}px;
      `}

    ${({ $visible }) =>
      !$visible &&
      css`
        top: calc(100% - 2rem);
        opacity: 0;
        pointer-events: none;
      `};

    ${({ $horizontalAlignment }) => {
      switch ($horizontalAlignment) {
        default:
        case 'center':
          return css`
            left: 50%;
            transform: translateX(-50%);
          `
        case 'right':
          return css`
            right: 0;
          `
        case 'left':
          return css`
            left: 0;
          `
      }
    }};
  }
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
    z-index: ${props => props.theme.zIndex.modals};
    padding: ${props => props.theme.container.padding};
    display: flex;
    align-items: flex-end;
    transition-duration: ${props => props.theme.transitionDurations.default};
    transition-property: opacity;

    ${({ $visible }) =>
      !$visible &&
      css`
        pointer-events: none;
        opacity: 0;
      `}
  }
`

import { styled, css } from 'styled-components'

import { screens } from '~/lib/responsiveness'

import { CardBase } from '~/components/CardBase'

import { PopoverBoxDirections, PopoverBoxAlignment } from '.'

export const Box = styled(CardBase)<{
  $visible: boolean
  $alignment?: PopoverBoxAlignment
  $direction: PopoverBoxDirections
  $maxHeight?: number
  $maxWidth?: number
}>`
  width: 100%;
  overflow-y: hidden;

  ${({ $visible }) =>
    $visible &&
    css`
      pointer-events: all;
    `}

  ${screens.tablet} {
    position: absolute;
    z-index: 10;
    width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth + 'px' : 'max-content')};
    max-width: max-content;
    transition: ${props => props.theme.transitionDurations.default};
    transition-property: background, border, transform, opacity, top;

    ${({ $maxHeight }) =>
      $maxHeight &&
      css`
        max-height: ${$maxHeight}px;
      `}

    ${({ $visible }) =>
      !$visible &&
      css`
        opacity: 0;
        pointer-events: none;
      `};

    ${({ $direction }) => {
      switch ($direction) {
        case 'top':
          return css`
            bottom: 100%;
          `
        case 'bottom':
          return css`
            top: 100%;
          `
        case 'left':
          return css`
            right: 100%;
          `
        case 'right':
          return css`
            left: 100%;
          `
      }
    }}

    ${({ $direction, $alignment }) => {
      if ($direction === 'left' || $direction === 'right')
        switch ($alignment) {
          default:
          case 'center':
            return css`
              top: 50%;
              transform: translateY(-50%);
            `
          case 'top':
            return css`
              top: 0;
            `
          case 'bottom':
            return css`
              bottom: 0;
            `
        }
      else
        switch ($alignment) {
          default:
          case 'left':
            return css`
              left: 0;
            `
          case 'center':
            return css`
              left: 50%;
              transform: translateX(-50%);
            `
          case 'right':
            return css`
              right: 0;
            `
        }
    }};
  }
`

export const Wrapper = styled.div<{ $visible: boolean }>`
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

  ${screens.tablet} {
    background: initial;
    height: initial;
    max-height: initial;
    width: initial;
    position: static;
    padding: 0;
    display: block;
    transition: initial;
  }
`

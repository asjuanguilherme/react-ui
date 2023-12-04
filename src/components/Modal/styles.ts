import styled, { css, keyframes } from 'styled-components'
import {
  borderRadius,
  spacing,
  font,
  zIndex,
  layout,
  transition,
  screens,
} from 'styles/tokens'
import { ModalVariant } from '.'
import { LayerIndex } from 'types'
import { fontFamily } from 'fonts'

export const BoxContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: ${spacing.components.medium};
  padding-top: 0;
  line-height: 1.8em;
  font-size: ${font.sizes.small};

  ${screens.tablet_Up} {
    font-size: ${font.sizes.medium};
  }
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.content.text};
  font-size: ${font.sizes.medium};
  font-weight: ${fontFamily.poppins.weights.medium};
  margin-bottom: 0;
`

export const CloseButton = styled.button`
  background: transparent;
  display: inline-flex;
  padding: ${spacing.components.small};
  font-size: ${font.sizes.large};
  transition: 0.2s;
  transition-property: color;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  right: ${spacing.components.small};
  top: ${spacing.components.small};
  color: ${props => props.theme.colors.content.title};

  &:hover {
    color: ${props => props.theme.colors.main.primary.normal};
  }
`

export const BoxFooter = styled.div``

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.components.medium};
`

const appearBoxKeyframes = keyframes`
  from {
    transform: scale(.9);
    opacity: 0;
  }
  to {
    transform: initial;
  }
`

export const Box = styled.div<{
  $width: number
  $hasTitle: boolean
  $positionY: string
  $layer: LayerIndex
}>`
  position: relative;
  width: 100%;
  max-height: 85vh;
  max-width: ${props => props.$width}px;
  background: ${props => props.theme.colors.layers[1].background};
  border: 1px solid ${props => props.theme.colors.layers[1].border};
  border-radius: ${borderRadius.medium};
  overflow: hidden;
  animation: ${appearBoxKeyframes} 0.3s ease-out;
  display: flex;
  flex-direction: column;
  padding-top: ${props =>
    props.$hasTitle ? 'initial' : spacing.components.medium};
  transition: 0.15s;
  top: ${props => props.$positionY};
`

const wrapperAppearKeyframes = keyframes`from {
  backdrop-filter: initial;
}`

export const Wrapper = styled.div<{ $opened: boolean; $variant: ModalVariant }>`
  position: fixed;
  z-index: ${zIndex.modals};
  height: 100%;
  width: 100vw;
  padding: ${layout.gutter};
  display: flex;

  ${({ $variant, $opened, theme }) => {
    switch ($variant) {
      case 'discret':
        return css`
          pointer-events: none;
          justify-content: flex-start;
          align-items: flex-end;

          ${Box} {
            pointer-events: initial;
            box-shadow: 0 0 3rem ${theme.colors.content.title}15;
          }

          ${closed &&
          css`
            ${Box} {
              transform: scale(0.9);
              opacity: 0;
            }
          `}
        `
      default:
        return css`
          align-items: center;
          justify-content: center;
          animation: ${wrapperAppearKeyframes} 0.2s ease;
          transition: ${transition.fast};
          transition-property: backdrop-filter, background, visibility;
          backdrop-filter: blur(6px);
          background: rgba(
            0,
            0,
            0,
            ${props => (props.theme.name === 'DARK' ? '0.1' : '0.3')}
          );

          ${!$opened &&
          css`
            backdrop-filter: initial;
            background: transparent;
            visibility: hidden;

            ${Box} {
              transform: scale(0.9);
              opacity: 0;
            }
          `}
        `
    }
  }}
`

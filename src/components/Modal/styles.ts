import { styled, css, keyframes } from 'styled-components'

import { fontFamily } from '@/fonts'

import { screens } from '@/lib/responsiveness'
import { ThemeLayerIndex } from '@/lib/theming'

import { ModalVariant } from '.'

export const BoxContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: ${props => props.theme.spacing.components.medium};
  padding-top: 0;
  line-height: 1.8em;
  font-size: ${props => props.theme.fontSizes.small};

  ${screens.tablet} {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.content.text};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${fontFamily.poppins.weights.medium};
  margin-bottom: 0;
`

export const CloseButton = styled.button`
  background: transparent;
  display: inline-flex;
  padding: ${props => props.theme.spacing.components.small};
  font-size: ${props => props.theme.fontSizes.large};
  transition: 0.2s;
  transition-property: color;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  right: ${props => props.theme.spacing.components.small};
  top: ${props => props.theme.spacing.components.small};
  color: ${props => props.theme.colors.content.title};

  &:hover {
    color: ${props => props.theme.colors.palette.primary.normal};
  }
`

export const BoxFooter = styled.div``

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.components.medium};
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
  $layer: ThemeLayerIndex
}>`
  position: relative;
  width: 100%;
  max-height: 85vh;
  max-width: ${props => props.$width}px;
  background: ${props => props.theme.colors.layers[1].background};
  border: 1px solid ${props => props.theme.colors.layers[1].border};
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  animation: ${appearBoxKeyframes} 0.3s ease-out;
  display: flex;
  flex-direction: column;
  padding-top: ${props =>
    props.$hasTitle
      ? 'initial'
      : props => props.theme.spacing.components.medium};
  transition: 0.15s;
  top: ${props => props.$positionY};
`

const wrapperAppearKeyframes = keyframes`from {
  backdrop-filter: initial;
}`

export const Wrapper = styled.div<{ $opened: boolean; $variant: ModalVariant }>`
  position: fixed;
  z-index: ${props => props.theme.zIndex.modals};
  height: 100%;
  width: 100vw;
  padding: ${props => props.theme.container.padding};
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
          transition: ${props => props.theme.transitionDurations.fast};
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

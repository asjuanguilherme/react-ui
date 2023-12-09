import { ThemeLayerIndex } from 'lib'
import { mix } from 'polished'
import styled, { css, keyframes } from 'styled-components'

import { StatusBoxTypes } from '.'

const getBgColor = (bgColor: string, typeColor: string) =>
  mix(0.9, bgColor, typeColor)

const getBorderColor = (bgColor: string, typeColor: string) =>
  mix(0.3, bgColor, typeColor)

export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${props => props.theme.spacing.components.small};
`

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.content.text};
  font-size: ${props => props.theme.fontSizes.small};
  padding-top: ${props => props.theme.spacing.components.large};
  padding-bottom: ${props => props.theme.spacing.components.large};
  overflow-y: auto;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.components.small};
  font-weight: ${props => props.theme.fontWeights.bold};

  svg {
    font-size: ${props => props.theme.fontSizes.small};
  }
`

export const CloseButton = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.colors.content.text};
  font-size: ${props => props.theme.fontSizes.xsmall};
  border-radius: 100%;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const appearCard = keyframes`
  from {
    transform: scale(.9);
    opacity: .5;
  }

`

export const Wrapper = styled.div<{
  opened: boolean
  type: StatusBoxTypes
  layer: ThemeLayerIndex
  height?: string
  width?: string
}>`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.components.large};
  width: ${props => props.width ?? 'unset'};
  height: ${props => props.height ?? 'unset'};
  border-width: 1px;
  border-style: solid;
  animation: ${appearCard} ${props => props.theme.transitionDurations.default}
    linear;

  ${({ opened, theme }) =>
    !opened &&
    css`
      transition: ${theme.transitionDurations.default} ease;
      transition-property: transform, opacity;
      transform: scale(0.9);
      opacity: 0;
    `}

  ${({ theme, type, layer }) => {
    const currentLayer = theme.colors.layers[layer]

    switch (type) {
      case 'info':
        return css`
          background-color: ${currentLayer.background};
          border-color: ${currentLayer.border};
          color: ${theme.colors.content.text};
        `
      case 'warning':
        return css`
          background-color: ${getBgColor(
            currentLayer.background,
            theme.colors.palette.primary.normal,
          )};
          border-color: ${getBorderColor(
            theme.colors.palette.primary.normal,
            currentLayer.border,
          )};
          color: ${theme.colors.palette.primary.normal};
        `
      case 'error':
        return css`
          background-color: ${getBgColor(
            currentLayer.background,
            theme.colors.palette.error.normal,
          )};
          border-color: ${getBorderColor(
            theme.colors.palette.error.normal,
            currentLayer.border,
          )};
          color: ${theme.colors.palette.error.normal};
        `
      case 'success':
        return css`
          background-color: ${getBgColor(
            currentLayer.background,
            theme.colors.palette.success.normal,
          )};
          border-color: ${getBorderColor(
            theme.colors.palette.success.normal,
            currentLayer.border,
          )};
          color: ${theme.colors.palette.success.normal};
        `
    }
  }}
`

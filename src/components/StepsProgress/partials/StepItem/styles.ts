import { math, opacify, rem } from 'polished'
import styled, { css } from 'styled-components'

import { StepsProgressStemItemListPosition } from '.'

const config = {
  badgeSize: rem(80),
  progressBarHeight: rem(15),
  progressBarTopOffset: function () {
    return math(this.badgeSize + ' / 2')
  },
}

export const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
`

export const Title = styled.span`
  width: max-content;
  margin-bottom: ${props => props.theme.spacing.components.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
`

export const BadgeCircle = styled.span``

export const Badge = styled.span<{ $active: boolean }>`
  display: flex;
  height: ${config.badgeSize};
  width: ${config.badgeSize};
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.circle};
  font-size: ${props => props.theme.fontSizes.xlarge};
  margin-bottom: ${props => props.theme.spacing.components.medium};

  ${({ $active, theme }) => {
    switch ($active) {
      case true:
        return css`
          color: white;
          background: ${theme.colors.palette.primary.normal};
        `
      default:
      case false:
        return css`
          color: white;
          background: ${theme.colors.content.detail};
        `
    }
  }}
`

export const Wrapper = styled.li<{
  $listPosition: StepsProgressStemItemListPosition
  $active: boolean
  $width?: number
  $isCurrentStep?: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  padding: 0 ${props => props.theme.spacing.components.large};

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width}px;
    `}

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    height: ${config.progressBarHeight};
    top: ${config.progressBarTopOffset()};
    width: 100.1%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${({ $active, $isCurrentStep, $listPosition, theme }) => {
      switch ($active) {
        case true:
          return css`
            background: ${$isCurrentStep && $listPosition !== 'end'
              ? `linear-gradient(-90deg, ${theme.colors.palette.primary.light}, ${theme.colors.palette.primary.dark})`
              : theme.colors.palette.primary.dark};
          `
        default:
        case false:
          return css`
            color: white;
            background: ${opacify(-0.5, theme.colors.content.detail)};
          `
      }
    }}

    ${({ $listPosition }) => {
      switch ($listPosition) {
        case 'start':
          return css`
            border-radius: 99px 0 0 99px;
          `
        case 'end':
          return css`
            border-radius: 0 99px 99px 0;
          `
        default:
        case 'middle':
          return css``
      }
    }}
  }
`

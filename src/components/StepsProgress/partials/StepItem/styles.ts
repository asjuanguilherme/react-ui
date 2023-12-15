import { math, opacify, rem } from 'polished'
import styled, { css } from 'styled-components'

import { CardBase } from '@/components/CardBase'

import { StepsProgressDirection } from '../Root'

import { StepsProgressStemItemListPosition } from '.'

const config = {
  badgeSize: rem(80),
  progressBarSize: rem(15),
  progressBarOffset: function () {
    return math(this.badgeSize + ' / 2')
  },
}

export const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
`

export const Title = styled.span<{ $direction: StepsProgressDirection }>`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.content.title};
  text-wrap: nowrap;
`

export const Card = styled(CardBase)<{
  $isCurrentStep: boolean
}>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.components.medium};
  padding: ${props => props.theme.spacing.components.medium};
  flex: 1;

  ${({ $isCurrentStep, theme }) =>
    $isCurrentStep &&
    css`
      border: 1px solid ${opacify(-0.85, theme.colors.palette.primary.light)};
      background-color: ${opacify(-0.9, theme.colors.palette.primary.light)};
    `}
`

export const BadgeCircle = styled.span`
  display: block;
  height: calc(${config.badgeSize} / 3);
  width: calc(${config.badgeSize} / 3);
  border-radius: ${props => props.theme.borderRadius.circle};
  background-color: currentColor;
`

export const Badge = styled.span<{
  $active: boolean
  $stepsFullyCompleted: boolean
}>`
  display: flex;
  height: ${config.badgeSize};
  width: ${config.badgeSize};
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.circle};
  font-size: calc(${config.badgeSize} / 2);
  margin-bottom: ${props => props.theme.spacing.components.medium};
  flex-shrink: 0;

  ${({ $active, $stepsFullyCompleted, theme }) => {
    if ($stepsFullyCompleted)
      return css`
        color: white;
        background: ${theme.colors.palette.success.normal};
      `

    switch ($active) {
      case true:
        return css`
          color: white;
          background: ${theme.colors.palette.primary.dark};
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
  $isCurrentStep: boolean
  $stepsFullyCompleted: boolean
  $active: boolean
  $width?: number | string
  $direction?: StepsProgressDirection
}>`
  display: flex;
  justify-content: center;
  z-index: 0;
  position: relative;
  align-items: center;

  ${({ $width }) => {
    if (!$width) return
    if (typeof $width === 'string')
      return css`
        width: ${$width};
      `

    return css`
      width: ${$width}px;
    `
  }}

  ${({ $direction, theme }) => {
    switch ($direction) {
      case 'column':
        return css`
          padding: ${theme.spacing.components.large} 0;
          gap: ${theme.spacing.components.large};
        `
      default:
      case 'row':
        return css`
          flex-direction: column;
          padding: 0 ${theme.spacing.components.large};
        `
    }
  }}

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;

    ${({ $direction }) => {
      switch ($direction) {
        case 'column':
          return css`
            height: 100.1%;
            width: ${config.progressBarSize};
            left: ${config.progressBarOffset()};
            transform: translateX(-50%);
          `
        default:
        case 'row':
          return css`
            top: ${config.progressBarOffset()};
            height: ${config.progressBarSize};
            width: 100.1%;
            left: 50%;
            transform: translate(-50%, -50%);
          `
      }
    }}

    ${({
      $active,
      $listPosition,
      $isCurrentStep,
      $stepsFullyCompleted,
      theme,
      $direction,
    }) => {
      if ($stepsFullyCompleted)
        return css`
          background: ${theme.colors.palette.success.dark};
        `

      switch ($active) {
        case true:
          switch ($listPosition) {
            case 'start':
              if ($isCurrentStep)
                return css`
                  background: linear-gradient(
                    ${$direction === 'row' ? '-90deg' : '0deg'},
                    ${opacify(-0.5, theme.colors.content.detail)},
                    ${theme.colors.palette.primary.light}
                  );
                `
              return css`
                background: linear-gradient(
                  ${$direction === 'row' ? '-90deg' : '0deg'},
                  ${theme.colors.palette.primary.light},
                  ${theme.colors.palette.primary.dark}
                );
              `
            case 'middle':
              if ($isCurrentStep)
                return css`
                  background: linear-gradient(
                    ${$direction === 'row' ? '-90deg' : '0deg'},
                    ${opacify(-0.5, theme.colors.content.detail)},
                    ${theme.colors.palette.primary.light}
                  );
                `
              else
                return css`
                  background: ${theme.colors.palette.primary.light};
                `
            default:
            case 'end':
              return css`
                background: linear-gradient(
                  ${$direction === 'row' ? '90deg' : '0deg'},
                  ${theme.colors.palette.primary.light},
                  ${theme.colors.palette.primary.dark}
                );
              `
          }

        default:
        case false:
          return css`
            color: white;
            background: ${opacify(-0.5, theme.colors.content.detail)};
          `
      }
    }}

    ${({ $listPosition, $direction }) => {
      switch ($listPosition) {
        case 'start':
          return css`
            border-radius: ${$direction === 'row'
              ? '99px 0 0 99px'
              : '99px 99px 0 0'};
          `
        case 'end':
          return css`
            border-radius: ${$direction === 'row'
              ? '0 99px 99px 0'
              : '0 0 99px 99px'};
          `
        default:
        case 'middle':
          return css``
      }
    }}
  }
`

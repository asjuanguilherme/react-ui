import styled, { css } from 'styled-components'
import { BadgeSize, BadgeType } from '.'
import { opacify, rem } from 'polished'

export const Wrapper = styled.span<{ $type: BadgeType; $size: BadgeSize }>`
  font-size: ${props => props.theme.fontSizes.xsmall};

  display: inline-flex;
  width: max-content;
  padding-top: ${props => props.theme.spacing.components.xsmall};
  padding-bottom: ${props => props.theme.spacing.components.xsmall};
  padding-left: ${props => props.theme.spacing.components.medium};
  padding-right: ${props => props.theme.spacing.components.medium};
  border-radius: ${props => props.theme.borderRadius.small};

  ${props => {
    switch (props.$size) {
      case 'small':
        return css`
          font-size: ${rem(10)};
        `
      default:
      case 'default':
        return css`
          font-size: ${props => props.theme.fontSizes.small};
        `
    }
  }}

  ${({ $type, theme }) => {
    switch ($type) {
      case 'error':
        return css`
          background-color: ${theme.colors.palette.error.light};
          color: white;
        `
      case 'warning':
        return css`
          background-color: ${theme.colors.palette.warning.normal};
          color: white;
        `
      case 'success':
        return css`
          background-color: ${theme.colors.palette.success.normal};
          color: white;
        `
      default:
        return css`
          background-color: ${opacify(
            -0.85,
            theme.colors.palette.primary.light,
          )};
          color: ${theme.colors.palette.primary.normal};
        `
    }
  }}
`

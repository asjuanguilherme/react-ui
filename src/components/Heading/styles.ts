import { styled, css } from 'styled-components'

import { screens } from '~/lib'

import { HeadingLevel } from '.'

export const Wrapper = styled.span<{ $level: HeadingLevel }>`
  font-weight: ${props => props.theme.fontWeights.medium};

  ${({ $level, theme }) => {
    switch ($level) {
      case 3:
      case 2:
      case 1:
        return css`
          font-weight: ${theme.fontWeights.bold};
        `
    }
  }}

  ${({ $level, theme }) => {
    switch ($level) {
      case 1:
        return css`
          font-size: ${theme.fontSizes.xlarge};

          ${screens.tablet} {
            font-size: ${theme.fontSizes.xxlarge};
          }
        `
      case 2:
        return css`
          font-size: ${theme.fontSizes.xlarge};
        `
      case 3:
        return css`
          font-size: ${theme.fontSizes.large};
        `
      case 4:
      case 5:
      case 6:
        return css`
          font-size: ${theme.fontSizes.medium};
        `
    }
  }}
`

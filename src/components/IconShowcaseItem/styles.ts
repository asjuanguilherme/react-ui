import { styled, css } from 'styled-components'

import { fontFamily } from '@/fonts'

import { CardBase } from '@/components/CardBase'

export const Slug = styled.span`
  position: absolute;
  font-size: ${props => props.theme.fontSizes.small};
  left: ${props => props.theme.spacing.components.small};
  bottom: ${props => props.theme.spacing.components.small};
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  b {
    font-weight: ${fontFamily.poppins.weights.bold};
    color: ${props => props.theme.colors.palette.primary.normal};
  }
`

export const Wrapper = styled(CardBase)<{
  $active?: boolean
}>`
  text-decoration: none;
  width: 100%;
  padding-top: 100%;
  border-radius: ${props => props.theme.borderRadius.medium};
  position: relative;
  transition: ${props => props.theme.transitionDurations.fast};
  transition-property: background, color, border;

  & > svg {
    width: 30%;
    height: 30%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: ${props => props.theme.transitionDurations.fast};
    transition-property: transform;
  }

  ${({ $active, theme }) =>
    $active
      ? css`
          color: ${theme.colors.palette.primary.normal};
          border-color: ${theme.colors.palette.primary.normal};

          svg {
            transform: translate(-50%, -50%) scale(1.15);
          }
        `
      : css`
          &:hover {
            cursor: pointer;

            svg {
              transform: translate(-50%, -50%) scale(1.15);
            }
          }
        `}
`

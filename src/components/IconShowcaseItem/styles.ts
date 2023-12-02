import { borderRadius, font, spacing, transition } from 'styles/tokens'
import { CardBase } from 'components/CardBase'
import styled, { css } from 'styled-components'
import { fontFamily } from 'styles'

export const Slug = styled.span`
  position: absolute;
  font-size: ${font.sizes.smaller};
  left: ${spacing.components.small};
  bottom: ${spacing.components.small};
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  b {
    font-weight: ${fontFamily.montserrat.weight.bold};
    color: ${props => props.theme.colors.main.primary.normal};
  }
`

export const Wrapper = styled(CardBase)<{
  $active?: boolean
}>`
  text-decoration: none;
  width: 100%;
  padding-top: 100%;
  border-radius: ${borderRadius.medium};
  position: relative;
  transition: ${transition.fast};
  transition-property: background, color, border;

  & > svg {
    width: 30%;
    height: 30%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: ${transition.fast};
    transition-property: transform;
  }

  ${({ $active, theme }) =>
    $active
      ? css`
          color: ${theme.colors.main.primary.normal};
          border-color: ${theme.colors.main.primary.normal};

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

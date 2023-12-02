import { borderRadius, spacing, transition } from 'styles/tokens'
import { opacify } from 'polished'
import styled, { css } from 'styled-components'

export const Button = styled.button<{ $active?: boolean }>`
  height: 1.8rem;
  width: 1.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: ${borderRadius.circle};
  color: ${props => props.theme.colors.main.primary.normal};
  background: transparent;
  transition: ${transition.default} background-color;

  ${props =>
    props.$active
      ? css`
          cursor: default;
          pointer-events: none;
          background-color: ${props => props.theme.colors.main.primary.normal};
          color: white;
        `
      : css`
          &:hover {
            cursor: pointer;
            background-color: ${props =>
              opacify(-0.7, props.theme.colors.main.primary.normal)};
          }
        `}
`

export const Wrapper = styled.nav`
  display: flex;
  gap: ${spacing.components.small};
  width: 100%;
  justify-content: center;
  padding: ${spacing.components.medium};
`

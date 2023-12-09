import { opacify } from 'polished'
import styled, { css } from 'styled-components'

export const Button = styled.button<{ $active?: boolean }>`
  height: 1.8rem;
  width: 1.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius.circle};
  color: ${props => props.theme.colors.palette.primary.normal};
  background: transparent;
  transition: ${props => props.theme.transitionDurations.default}
    background-color;

  ${props =>
    props.$active
      ? css`
          cursor: default;
          pointer-events: none;
          background-color: ${props =>
            props.theme.colors.palette.primary.normal};
          color: white;
        `
      : css`
          &:hover {
            cursor: pointer;
            background-color: ${props =>
              opacify(-0.7, props.theme.colors.palette.primary.normal)};
          }
        `}
`

export const Wrapper = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.components.small};
  width: 100%;
  justify-content: center;
  padding: ${props => props.theme.spacing.components.medium};
`
